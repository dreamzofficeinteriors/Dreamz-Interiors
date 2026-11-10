import os
from PIL import Image, ImageEnhance, ImageFilter

TEMP_DIR = r"e:\DREAMZ INTERIORS\THE WEBSITE\Dreamz Codebase\temp_images"
OUT_DIR = r"e:\DREAMZ INTERIORS\THE WEBSITE\Dreamz Codebase\public\placeholders"

def adjust_tone_curve(img, gamma=1.0, shadow_lift=0, tint_warmth=0, tint_magenta=0):
    if img.mode != 'RGB':
        img = img.convert('RGB')
        
    r_chan, g_chan, b_chan = img.split()
    
    def make_lut(channel_tint, lift):
        lut = []
        for i in range(256):
            val = i / 255.0
            if lift > 0:
                val = val + (lift / 255.0) * ((1.0 - val) ** 2.2)
            if gamma != 1.0:
                val = val ** (1.0 / gamma)
            val = val + (channel_tint / 255.0)
            val = max(0.0, min(1.0, val))
            lut.append(int(round(val * 255)))
        return lut

    r_lut = make_lut(tint_warmth + tint_magenta, shadow_lift)
    g_lut = make_lut(-tint_magenta * 0.5, shadow_lift)
    b_lut = make_lut(-tint_warmth, shadow_lift)
    
    r_chan = r_chan.point(r_lut)
    g_chan = g_chan.point(g_lut)
    b_chan = b_chan.point(b_lut)
    
    return Image.merge('RGB', (r_chan, g_chan, b_chan))

def crop_to_aspect(img, target_w_ratio=16, target_h_ratio=10, focal_x=0.5, focal_y=0.5, crop_bottom_pct=0.0):
    w, h = img.size
    if crop_bottom_pct > 0:
        h_cropped = int(h * (1.0 - crop_bottom_pct))
        img = img.crop((0, 0, w, h_cropped))
        w, h = img.size
        
    target_aspect = target_w_ratio / target_h_ratio
    current_aspect = w / h
    
    if abs(current_aspect - target_aspect) < 0.01:
        return img
        
    if current_aspect > target_aspect:
        new_w = int(h * target_aspect)
        left = max(0, min(w - new_w, int((w - new_w) * focal_x)))
        return img.crop((left, 0, left + new_w, h))
    else:
        new_h = int(w / target_aspect)
        top = max(0, min(h - new_h, int((h - new_h) * focal_y)))
        return img.crop((0, top, w, top + new_h))

def enhance_image(img, gamma=1.1, shadow_lift=20, contrast=1.1, brightness=1.03, color=1.12, sharpness=1.3, tint_warmth=4, tint_magenta=3):
    img = adjust_tone_curve(img, gamma=gamma, shadow_lift=shadow_lift, tint_warmth=tint_warmth, tint_magenta=tint_magenta)
    
    if brightness != 1.0:
        img = ImageEnhance.Brightness(img).enhance(brightness)
    if contrast != 1.0:
        img = ImageEnhance.Contrast(img).enhance(contrast)
    if color != 1.0:
        img = ImageEnhance.Color(img).enhance(color)
        
    img = img.filter(ImageFilter.UnsharpMask(radius=1.3, percent=int(sharpness * 100), threshold=3))
    return img

def save_image(img, filename, max_width=1600, quality=90):
    w, h = img.size
    if w > max_width:
        new_h = int(h * (max_width / w))
        img = img.resize((max_width, new_h), Image.Resampling.LANCZOS)
        
    out_path = os.path.join(OUT_DIR, filename)
    img.save(out_path, "JPEG", quality=quality, progressive=True, optimize=True)
    size_kb = os.path.getsize(out_path) // 1024
    print(f"Generated: {filename} ({img.size[0]}x{img.size[1]}, {size_kb} KB)")

# Configuration per destination slot
TARGETS = [
    {
        "source": "IMG-20250423-WA0019.jpg",
        "dest": "hero-poster.jpg",
        "aspect": (16, 9),
        "focal": (0.5, 0.45),
        "crop_bottom": 0.0,
        "params": {"gamma": 1.06, "shadow_lift": 16, "contrast": 1.10, "brightness": 1.03, "color": 1.10, "sharpness": 1.35, "tint_warmth": 2, "tint_magenta": 2},
        "max_w": 1920
    },
    {
        "source": "IMG-20250423-WA0019.jpg",
        "dest": "og-cover.jpg",
        "aspect": (1200, 630),
        "focal": (0.5, 0.45),
        "crop_bottom": 0.0,
        "params": {"gamma": 1.06, "shadow_lift": 16, "contrast": 1.10, "brightness": 1.03, "color": 1.12, "sharpness": 1.35, "tint_warmth": 2, "tint_magenta": 2},
        "max_w": 1200
    },
    {
        "source": "IMG-20240109-WA0036.jpg",
        "dest": "solution-commercial.jpg",
        "aspect": (16, 10),
        "focal": (0.5, 0.45),
        "crop_bottom": 0.0,
        "params": {"gamma": 1.08, "shadow_lift": 18, "contrast": 1.14, "brightness": 1.04, "color": 1.16, "sharpness": 1.35, "tint_warmth": 3, "tint_magenta": 1},
        "max_w": 1600
    },
    {
        "source": "IMG-20240109-WA0104.jpg",
        "dest": "solution-modular.jpg",
        "aspect": (16, 10),
        "focal": (0.5, 0.45),
        "crop_bottom": 0.0,
        "params": {"gamma": 1.12, "shadow_lift": 26, "contrast": 1.14, "brightness": 1.08, "color": 1.12, "sharpness": 1.40, "tint_warmth": 5, "tint_magenta": 3},
        "max_w": 1600
    },
    {
        "source": "IMG-20250423-WA0046.jpg",
        "dest": "solution-turnkey.jpg",
        "aspect": (16, 10),
        "focal": (0.5, 0.45),
        "crop_bottom": 0.0,
        "params": {"gamma": 1.10, "shadow_lift": 20, "contrast": 1.15, "brightness": 1.05, "color": 1.18, "sharpness": 1.40, "tint_warmth": 3, "tint_magenta": 2},
        "max_w": 1600
    },
    {
        "source": "IMG-20240109-WA0045.jpg",
        "dest": "project-01.jpg",
        "aspect": (16, 10),
        "focal": (0.5, 0.45),
        "crop_bottom": 0.0,
        "params": {"gamma": 1.12, "shadow_lift": 22, "contrast": 1.12, "brightness": 1.06, "color": 1.14, "sharpness": 1.35, "tint_warmth": 3, "tint_magenta": 2},
        "max_w": 1600
    },
    {
        "source": "IMG-20240109-WA0016.jpg",
        "dest": "project-01-detail-1.jpg",
        "aspect": (16, 10),
        "focal": (0.5, 0.45),
        "crop_bottom": 0.0,
        "params": {"gamma": 1.14, "shadow_lift": 28, "contrast": 1.14, "brightness": 1.09, "color": 1.12, "sharpness": 1.35, "tint_warmth": 3, "tint_magenta": 6},
        "max_w": 1600
    },
    {
        "source": "IMG-20240109-WA0057.jpg",
        "dest": "project-01-detail-2.jpg",
        "aspect": (16, 10),
        "focal": (0.5, 0.45),
        "crop_bottom": 0.0,
        "params": {"gamma": 1.12, "shadow_lift": 24, "contrast": 1.12, "brightness": 1.07, "color": 1.12, "sharpness": 1.30, "tint_warmth": 3, "tint_magenta": 4},
        "max_w": 1600
    },
    {
        "source": "IMG-20240109-WA0104.jpg",
        "dest": "project-02.jpg",
        "aspect": (16, 10),
        "focal": (0.5, 0.45),
        "crop_bottom": 0.0,
        "params": {"gamma": 1.12, "shadow_lift": 26, "contrast": 1.14, "brightness": 1.08, "color": 1.12, "sharpness": 1.40, "tint_warmth": 5, "tint_magenta": 3},
        "max_w": 1600
    },
    {
        "source": "IMG-20240109-WA0045.jpg",
        "dest": "project-02-detail-1.jpg",
        "aspect": (16, 10),
        "focal": (0.5, 0.45),
        "crop_bottom": 0.0,
        "params": {"gamma": 1.12, "shadow_lift": 22, "contrast": 1.12, "brightness": 1.06, "color": 1.14, "sharpness": 1.35, "tint_warmth": 3, "tint_magenta": 2},
        "max_w": 1600
    },
    {
        "source": "IMG-20240109-WA0033.jpg",
        "dest": "project-02-detail-2.jpg",
        "aspect": (16, 10),
        "focal": (0.5, 0.45),
        "crop_bottom": 0.0,
        "params": {"gamma": 1.18, "shadow_lift": 34, "contrast": 1.15, "brightness": 1.14, "color": 1.12, "sharpness": 1.35, "tint_warmth": 4, "tint_magenta": 4},
        "max_w": 1600
    },
    {
        "source": "IMG-20250423-WA0046.jpg",
        "dest": "project-03.jpg",
        "aspect": (16, 10),
        "focal": (0.5, 0.45),
        "crop_bottom": 0.0,
        "params": {"gamma": 1.10, "shadow_lift": 20, "contrast": 1.15, "brightness": 1.05, "color": 1.18, "sharpness": 1.40, "tint_warmth": 3, "tint_magenta": 2},
        "max_w": 1600
    },
    {
        "source": "IMG-20240109-WA0134.jpg",
        "dest": "project-03-before.jpg",
        "aspect": (16, 10),
        "focal": (0.5, 0.40),
        "crop_bottom": 0.08, # crops out camera timestamp 2021-1-18 14:28
        "params": {"gamma": 1.10, "shadow_lift": 20, "contrast": 1.12, "brightness": 1.06, "color": 1.15, "sharpness": 1.35, "tint_warmth": 3, "tint_magenta": 2},
        "max_w": 1600
    },
    {
        "source": "IMG-20250423-WA0049.jpg",
        "dest": "project-03-detail-1.jpg",
        "aspect": (16, 10),
        "focal": (0.5, 0.45),
        "crop_bottom": 0.0,
        "params": {"gamma": 1.08, "shadow_lift": 18, "contrast": 1.12, "brightness": 1.04, "color": 1.14, "sharpness": 1.30, "tint_warmth": 2, "tint_magenta": 2},
        "max_w": 1600
    },
    {
        "source": "IMG-20240109-WA0057.jpg",
        "dest": "project-03-detail-2.jpg",
        "aspect": (16, 10),
        "focal": (0.5, 0.45),
        "crop_bottom": 0.0,
        "params": {"gamma": 1.12, "shadow_lift": 24, "contrast": 1.12, "brightness": 1.07, "color": 1.12, "sharpness": 1.30, "tint_warmth": 3, "tint_magenta": 4},
        "max_w": 1600
    },
    {
        "source": "IMG-20240109-WA0036.jpg",
        "dest": "project-04.jpg",
        "aspect": (16, 10),
        "focal": (0.5, 0.45),
        "crop_bottom": 0.0,
        "params": {"gamma": 1.08, "shadow_lift": 18, "contrast": 1.14, "brightness": 1.04, "color": 1.16, "sharpness": 1.35, "tint_warmth": 3, "tint_magenta": 1},
        "max_w": 1600
    },
    {
        "source": "IMG-20250423-WA0019.jpg",
        "dest": "project-04-detail-1.jpg",
        "aspect": (16, 10),
        "focal": (0.5, 0.45),
        "crop_bottom": 0.0,
        "params": {"gamma": 1.06, "shadow_lift": 16, "contrast": 1.10, "brightness": 1.03, "color": 1.10, "sharpness": 1.35, "tint_warmth": 2, "tint_magenta": 2},
        "max_w": 1600
    },
]

print("Starting image enhancement pipeline...")
for t in TARGETS:
    src_path = os.path.join(TEMP_DIR, t["source"])
    if not os.path.exists(src_path):
        print(f"Warning: source missing: {src_path}")
        continue
    raw_img = Image.open(src_path)
    
    # Crop to desired aspect ratio
    w_rat, h_rat = t["aspect"]
    f_x, f_y = t["focal"]
    c_bot = t.get("crop_bottom", 0.0)
    cropped = crop_to_aspect(raw_img, w_rat, h_rat, focal_x=f_x, focal_y=f_y, crop_bottom_pct=c_bot)
    
    # Apply photographic enhancements
    enhanced = enhance_image(cropped, **t["params"])
    
    # Save optimized JPEG
    save_image(enhanced, t["dest"], max_width=t.get("max_w", 1600))

print("All images processed and placed successfully!")
