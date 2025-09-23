# Assets Guide for Website Revamp

## Overview
All previous assets have been removed to prevent conflicts with your new medical facility website. This guide will help you add your new assets properly.

## Directory Structure
```
assets/
├── images/          # Place all images here
│   ├── logo.png     # Your clinic logo
│   ├── hero-bg.jpg  # Hero section background
│   ├── team/        # Team member photos
│   └── services/    # Service-related images
└── favicon/         # Favicon files
    ├── favicon.ico
    ├── favicon-16x16.png
    ├── favicon-32x32.png
    └── apple-touch-icon.png
```

## Required Assets

### 1. Logo
- **File**: `assets/images/logo.png`
- **Size**: Recommended 200x80px or similar aspect ratio
- **Format**: PNG with transparent background preferred
- **Usage**: Header navigation

### 2. Hero Background
- **File**: `assets/images/hero-bg.jpg`
- **Size**: Minimum 1920x1080px
- **Format**: JPG or PNG
- **Usage**: Hero section background

### 3. Team Photos
- **File**: `assets/images/team/doctor-name.jpg`
- **Size**: 300x400px (3:4 aspect ratio)
- **Format**: JPG or PNG
- **Usage**: Team member profiles

### 4. Favicon
- **Files**: Multiple sizes in `assets/favicon/`
- **Sizes**: 16x16, 32x32, 180x180 (Apple touch icon)
- **Format**: ICO, PNG
- **Usage**: Browser tab icon

## How to Update References

### 1. Update Logo Reference
In `index.html`, find this line:
```html
<!-- <img src="your-logo.png" alt="Your Clinic Logo" class="logo"> -->
```
Change to:
```html
<img src="assets/images/logo.png" alt="Your Clinic Logo" class="logo">
```

### 2. Update Hero Background
In `styles.css`, find this line:
```css
/* background: url('your-hero-image.jpg') no-repeat center center/cover; */
```
Change to:
```css
background: url('assets/images/hero-bg.jpg') no-repeat center center/cover;
```

### 3. Update Team Photos
In `index.html`, find this line:
```html
<!-- <img src="doctor-photo.jpg" alt="Doctor Name"> -->
```
Change to:
```html
<img src="assets/images/team/doctor-name.jpg" alt="Doctor Name">
```

### 4. Update Favicon References
In `index.html`, uncomment and update these lines:
```html
<link rel="apple-touch-icon" sizes="180x180" href="assets/favicon/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="assets/favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="assets/favicon/favicon-16x16.png">
```

## Meta Tags to Update

### 1. Open Graph Image
Update this line in `index.html`:
```html
<meta property="og:image" content="https://your-domain.com/assets/images/logo.png">
```

### 2. Structured Data Image
Update this line in the JSON-LD script:
```json
"image": "https://your-domain.com/assets/images/logo.png"
```

## Content to Update

### 1. Clinic Name
Replace "Your Medical Facility Name" with your actual clinic name throughout the HTML.

### 2. Doctor Information
Update team member names, specialties, and photos.

### 3. Contact Information
Update phone numbers, email, and address.

### 4. Services
Update the services offered to match your facility.

## Testing
After adding assets:
1. Open `index.html` in a browser
2. Check that all images load correctly
3. Verify favicon appears in browser tab
4. Test responsive design on mobile devices

## Notes
- All image paths are now relative to the project root
- Use descriptive filenames for better organization
- Optimize images for web (compress JPGs, use appropriate formats)
- Keep backup copies of original high-resolution images 