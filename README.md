# RealisticVision Prompt Generator

A modern, minimalist web interface for creating customized prompts for the RealisticVisionV60B1_v51HyperVAE.safetensors model, designed with clean aesthetics and intuitive UX.

![RealisticVision Prompt Generator](preview.png)

## Features

### Content
- Pre-filled subject with comprehensive physical attributes (thick, plump, bbw, fat, obese, chubby, muscular)
- Enhanced feminine facial features (gorgeous face, flowing hair, red lips, subtle makeup)
- Ethnicity selection (Japanese, Korean, Malaysian)
- 60+ clothing options with emphasis on revealing styles
- 30+ scene environments from luxurious interiors to natural settings
- 30+ pose variations for dynamic compositions
- 30+ lighting options for professional-grade results
- Additional details text area for custom attributes
- Quality enhancement toggles (high quality, highly detailed, 8K, cinematic lighting)
- Optimized negative prompt pre-configured for the model

### User Experience
- Modern, minimalist interface with clean typography
- Real-time prompt updates as options change
- Smooth animations and visual feedback
- Responsive design for all devices (mobile, tablet, desktop)
- Intuitive layout with logical grouping of options
- One-click generation and randomization
- Automatic clipboard copy with visible confirmation
- Clear visual hierarchy and whitespace
- Accessible controls with proper labeling

## Getting Started

1. Open `index.html` in your web browser
2. Select your desired options from the dropdown menus
3. Click "Generate Prompt" to create your prompt (automatically copied to clipboard)
4. Click "Random Prompt" to generate a random combination of options
5. Use the "Copy Positive" and "Copy Negative" buttons as needed
6. Paste the prompts into your stable diffusion interface with RealisticVisionV60B1_v51HyperVAE.safetensors

## Technology

- **Frontend**: HTML5, CSS3, JavaScript (vanilla)
- **Fonts**: Inter (Google Fonts)
- **Design**: CSS custom properties for theming, flexbox and grid for layout
- **Animations**: CSS transitions and JavaScript for smooth interactions
- **Clipboard API**: Modern browser API with fallback for older browsers

## Customization

You can easily customize the prompt generator:

- **Add new options**: Edit the HTML `<select>` elements to add new clothing, scene, pose, or lighting options
- **Change color scheme**: Modify the CSS custom properties in the `:root` selector
- **Adjust subject description**: Edit the `value` attribute of the subject input
- **Modify negative prompt**: Edit the `value` attribute of the negative prompt textarea

## Installation

No installation required - this is a client-side application that runs in any modern web browser.

1. Download or clone this repository
2. Open `index.html` in your web browser
3. Optionally, deploy to any web server or hosting platform

## Browser Support

The application is compatible with all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

## License

This project is open source and available for personal and commercial use.

## Notes

This prompt generator is specifically optimized for RealisticVisionV60B1_v51HyperVAE.safetensors and includes parameters that work well with this specific model. 