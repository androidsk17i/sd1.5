document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const generateBtn = document.getElementById('generateBtn');
    const randomBtn = document.getElementById('randomBtn');
    const copyBtn = document.getElementById('copyBtn');
    const copyNegativeBtn = document.getElementById('copyNegativeBtn');
    const generatedPrompt = document.getElementById('generatedPrompt');
    const negativePrompt = document.getElementById('negativePrompt');
    const copyNotification = document.getElementById('copyNotification');
    const form = document.getElementById('promptForm');
    
    // Initialize the form
    initializeForm();

    // Generate prompt when button is clicked
    generateBtn.addEventListener('click', generatePrompt);

    // Generate random prompt when random button is clicked
    randomBtn.addEventListener('click', generateRandomPrompt);

    // Copy positive prompt to clipboard functionality
    copyBtn.addEventListener('click', function() {
        copyToClipboard(generatedPrompt, 'Copied positive prompt!');
    });
    
    // Copy negative prompt to clipboard functionality
    copyNegativeBtn.addEventListener('click', function() {
        copyToClipboard(negativePrompt, 'Copied negative prompt!');
    });

    // Initialize form with event listeners for real-time preview
    function initializeForm() {
        // Add event listeners to all form inputs for real-time preview
        const formInputs = form.querySelectorAll('select, input[type="checkbox"], textarea');
        formInputs.forEach(input => {
            input.addEventListener('change', function() {
                // Only generate if there is already text in the prompt area
                if (generatedPrompt.value.trim().length > 0) {
                    generatePrompt();
                }
            });
        });
        
        // Add smooth animation for checkboxes
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                this.closest('.checkbox-group').classList.toggle('checked', this.checked);
            });
            
            // Initialize checked state
            if (checkbox.checked) {
                checkbox.closest('.checkbox-group').classList.add('checked');
            }
        });
    }

    // Function to generate the prompt based on form inputs
    function generatePrompt() {
        // Add loading state
        generateBtn.classList.add('loading');
        generateBtn.textContent = 'Generating...';
        
        // Delay to show loading state (can be removed in production)
        setTimeout(() => {
            // Get values from form
            const subject = document.getElementById('subject').value;
            const ethnicity = document.getElementById('ethnicity').value;
            const clothing = document.getElementById('clothing').value;
            const scene = document.getElementById('scene').value;
            const pose = document.getElementById('pose').value;
            const lighting = document.getElementById('lighting').value;
            const additionalDetails = document.getElementById('additionalDetails').value;
            
            // Get checkbox values
            const highQuality = document.getElementById('highQuality').checked;
            const highlyDetailed = document.getElementById('highlyDetailed').checked;
            const resolution8k = document.getElementById('8k').checked;
            const cinematic = document.getElementById('cinematic').checked;

            // Build the prompt
            let prompt = subject.replace(/Japanese|Korean|Malaysian/i, ethnicity);

            // Add clothing if different from default
            if (clothing && !prompt.includes(clothing)) {
                prompt = prompt.replace(/sexy lingerie|sheer lace lingerie|revealing micro bikini/i, clothing);
            }

            // Add scene
            if (scene) {
                prompt += `, in a ${scene}`;
            }

            // Add pose
            if (pose) {
                prompt += `, ${pose}`;
            }

            // Add lighting
            if (lighting) {
                prompt += `, ${lighting}`;
            }

            // Add additional details
            if (additionalDetails) {
                prompt += `, ${additionalDetails}`;
            }

            // Add quality enhancers
            let enhancers = [];
            
            if (highQuality) {
                enhancers.push('high quality');
            }
            
            if (highlyDetailed) {
                enhancers.push('highly detailed');
            }
            
            if (resolution8k) {
                enhancers.push('8k resolution');
            }
            
            if (cinematic) {
                enhancers.push('cinematic lighting');
            }

            if (enhancers.length > 0) {
                prompt += `, ${enhancers.join(', ')}`;
            }

            // Add model-specific optimizations for RealisticVisionV60B1_v51HyperVAE
            prompt += ', realistic, photorealistic, photograph, (RAW photo:1.2), (portrait:1.1), (masterpiece:1.3), (best quality:1.4)';

            // Display the generated prompt with a subtle animation effect
            fadeInText(generatedPrompt, prompt);
            
            // Reset button state
            generateBtn.classList.remove('loading');
            generateBtn.textContent = 'Generate Prompt';
            
            // Auto-copy to clipboard
            autoCopyToClipboard();
        }, 300);
    }
    
    // Function to generate a random prompt
    function generateRandomPrompt() {
        // Add loading state
        randomBtn.classList.add('loading');
        randomBtn.textContent = 'Randomizing...';
        
        // Delay to show loading state (can be removed in production)
        setTimeout(() => {
            // Get all select elements
            const ethnicitySelect = document.getElementById('ethnicity');
            const clothingSelect = document.getElementById('clothing');
            const sceneSelect = document.getElementById('scene');
            const poseSelect = document.getElementById('pose');
            const lightingSelect = document.getElementById('lighting');
            
            // Get random options
            const randomEthnicity = getRandomOption(ethnicitySelect);
            const randomClothing = getRandomOption(clothingSelect);
            const randomScene = getRandomOption(sceneSelect);
            const randomPose = getRandomOption(poseSelect);
            const randomLighting = getRandomOption(lightingSelect);
            
            // Set random values with smooth animation
            animateSelectChange(ethnicitySelect, randomEthnicity);
            animateSelectChange(clothingSelect, randomClothing);
            animateSelectChange(sceneSelect, randomScene);
            animateSelectChange(poseSelect, randomPose);
            animateSelectChange(lightingSelect, randomLighting);
            
            // Random additional details
            const additionalDetailsOptions = [
                "with long flowing hair",
                "wearing pearl jewelry",
                "with subtle makeup",
                "with red lipstick",
                "with a flower in her hair",
                "with a gentle smile",
                "with a seductive gaze",
                "with diamond earrings",
                "with a gold necklace",
                "with natural makeup",
                "with smokey eye makeup",
                "with a choker necklace",
                "with wavy hair",
                "with straight hair",
                "with an updo hairstyle",
                "with a bob haircut",
                "with bangs",
                "with highlighted hair",
                "with ombre hair",
                "with a hair accessory",
                "with a belly chain",
                "with ankle bracelet",
                "with body glitter",
                "with a temporary tattoo",
                "with manicured nails",
                "with French manicure",
                "with a toe ring",
                "with a nose piercing",
                "with multiple ear piercings",
                "with a belly button piercing",
                "with a beauty mark",
                "with freckles",
                "with a tan",
                "with pale skin",
                "with rosy cheeks",
                "with winged eyeliner",
                "with false eyelashes",
                "with glossy lips",
                "with a body chain",
                "with a wristwatch",
                "with a cocktail ring",
                "with a statement necklace",
                "with hoop earrings",
                "with chandelier earrings",
                "with a tiara",
                "with a hair clip",
                "with a headband",
                "with a hair ribbon",
                "with a bracelet stack",
                "with an anklet",
                "with thick thighs",
                "with broad shoulders",
                "with defined muscles",
                "with voluptuous curves",
                "with strong arms",
                "with a full figure",
                "with toned abs",
                "with a curvaceous body",
                "with a powerful physique",
                "with muscular calves",
                "with plump lips",
                "with high cheekbones",
                "with almond-shaped eyes",
                "with long eyelashes",
                "with perfectly arched eyebrows",
                "with glowing skin",
                "with a radiant complexion",
                "with a beauty mark on her cheek",
                "with a beauty mark above her lip",
                "with a captivating smile",
                "with full pouty lips",
                "with shimmering eyeshadow",
                "with cat-eye makeup",
                "with metallic eyeshadow",
                "with a gradient lip color",
                "with contoured cheeks",
                "with highlighted cheekbones",
                "with a soft blush",
                "with dewy skin",
                "with a flawless complexion",
                "with a sultry gaze",
                "with bedroom eyes",
                "with a dimpled smile",
                "with a heart-shaped face",
                "with an elegant neck",
                "with a delicate jawline",
                "with a feminine chin",
                "with minimal clothing",
                "with strategically placed fabric",
                "with revealing cutouts",
                "with a plunging neckline",
                "with a high-cut bottom",
                "with side ties",
                "with an open back",
                "with a barely-there outfit",
                "with sheer fabric",
                "with see-through material",
                "with a daring outfit",
                "with a risqué ensemble",
                "with a provocative look",
                "with a skimpy outfit",
                "with a scanty bikini",
                "with a tiny swimsuit",
                "with a revealing top",
                "with a low-rise bottom"
            ];
            
            const additionalDetailsField = document.getElementById('additionalDetails');
            const randomDetails = Math.random() > 0.3 ? getRandomItem(additionalDetailsOptions) : "";
            additionalDetailsField.value = randomDetails;
            additionalDetailsField.dispatchEvent(new Event('change'));
            
            // Random quality enhancers with visual feedback
            animateCheckboxChange('highQuality', Math.random() > 0.1);
            animateCheckboxChange('highlyDetailed', Math.random() > 0.1);
            animateCheckboxChange('8k', Math.random() > 0.2);
            animateCheckboxChange('cinematic', Math.random() > 0.5);
            
            // Generate the prompt
            generatePrompt();
            
            // Reset button state
            randomBtn.classList.remove('loading');
            randomBtn.textContent = 'Random Prompt';
        }, 300);
    }

    // Helper function to animate select changes
    function animateSelectChange(selectElement, newValue) {
        selectElement.style.transition = 'opacity 0.2s ease';
        selectElement.style.opacity = '0.5';
        
        setTimeout(() => {
            selectElement.value = newValue;
            selectElement.style.opacity = '1';
            selectElement.dispatchEvent(new Event('change'));
        }, 200);
    }
    
    // Helper function to animate checkbox changes
    function animateCheckboxChange(checkboxId, newState) {
        const checkbox = document.getElementById(checkboxId);
        const container = checkbox.closest('.checkbox-group');
        
        container.style.transition = 'opacity 0.2s ease';
        container.style.opacity = '0.5';
        
        setTimeout(() => {
            checkbox.checked = newState;
            container.style.opacity = '1';
            container.classList.toggle('checked', newState);
            checkbox.dispatchEvent(new Event('change'));
        }, 200);
    }
    
    // Helper function to fade in text
    function fadeInText(element, text) {
        element.style.transition = 'opacity 0.3s ease';
        element.style.opacity = '0';
        
        setTimeout(() => {
            element.value = text;
            element.style.opacity = '1';
        }, 200);
    }
    
    // Helper function to get a random option from a select element
    function getRandomOption(selectElement) {
        const options = selectElement.options;
        const randomIndex = Math.floor(Math.random() * options.length);
        return options[randomIndex].value;
    }
    
    // Helper function to get a random item from an array
    function getRandomItem(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }
    
    // Function to copy text to clipboard and show notification
    function copyToClipboard(textElement, message) {
        textElement.select();
        textElement.setSelectionRange(0, 99999);
        
        try {
            navigator.clipboard.writeText(textElement.value)
                .then(() => showNotification(message))
                .catch(err => {
                    // Fallback for older browsers
                    document.execCommand('copy');
                    showNotification(message);
                    console.error('Clipboard API error:', err);
                });
        } catch (err) {
            // Final fallback
            document.execCommand('copy');
            showNotification(message);
            console.error('Copy operation error:', err);
        }
    }
    
    // Function to show copy notification
    function showNotification(message) {
        copyNotification.textContent = message || 'Copied to clipboard!';
        copyNotification.classList.add('show');
        
        setTimeout(() => {
            copyNotification.classList.remove('show');
        }, 2000);
    }
    
    // Function to auto-copy to clipboard
    function autoCopyToClipboard() {
        if (generatedPrompt.value.trim().length > 0) {
            copyToClipboard(generatedPrompt, 'Auto-copied to clipboard!');
        }
    }
}); 