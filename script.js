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

    // Generate prompt when button is clicked
    generateBtn.addEventListener('click', function() {
        generatePrompt();
    });

    // Generate random prompt when random button is clicked
    randomBtn.addEventListener('click', function() {
        generateRandomPrompt();
    });

    // Copy positive prompt to clipboard functionality
    copyBtn.addEventListener('click', function() {
        copyToClipboard(generatedPrompt, copyBtn, 'Copied Positive!');
    });
    
    // Copy negative prompt to clipboard functionality
    copyNegativeBtn.addEventListener('click', function() {
        copyToClipboard(negativePrompt, copyNegativeBtn, 'Copied Negative!');
    });

    // Function to generate the prompt based on form inputs
    function generatePrompt() {
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
            prompt = prompt.replace(/sexy lingerie|sheer lace lingerie/i, clothing);
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

        // Display the generated prompt
        generatedPrompt.value = prompt;
        
        // Auto-copy to clipboard
        autoCopyToClipboard();
    }
    
    // Function to generate a random prompt
    function generateRandomPrompt() {
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
        
        // Set random values
        ethnicitySelect.value = randomEthnicity;
        clothingSelect.value = randomClothing;
        sceneSelect.value = randomScene;
        poseSelect.value = randomPose;
        lightingSelect.value = randomLighting;
        
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
            "with a feminine chin"
        ];
        
        document.getElementById('additionalDetails').value = 
            Math.random() > 0.3 ? getRandomItem(additionalDetailsOptions) : "";
        
        // Random quality enhancers
        document.getElementById('highQuality').checked = Math.random() > 0.1;
        document.getElementById('highlyDetailed').checked = Math.random() > 0.1;
        document.getElementById('8k').checked = Math.random() > 0.2;
        document.getElementById('cinematic').checked = Math.random() > 0.5;
        
        // Generate the prompt with these random settings
        generatePrompt();
    }
    
    // Helper function to get a random option from a select element
    function getRandomOption(selectElement) {
        const options = selectElement.options;
        const randomIndex = Math.floor(Math.random() * options.length);
        return options[randomIndex].value;
    }
    
    // Helper function to get a random item from an array
    function getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    // Function to copy text to clipboard
    function copyToClipboard(textElement, buttonElement, successMessage) {
        textElement.select();
        document.execCommand('copy');
        
        // Visual feedback for copy action
        const originalText = buttonElement.textContent;
        buttonElement.textContent = successMessage;
        buttonElement.style.backgroundColor = '#27ae60';
        
        setTimeout(function() {
            buttonElement.textContent = originalText;
            buttonElement.style.backgroundColor = buttonElement === copyBtn ? '#3498db' : '#95a5a6';
        }, 1500);
    }
    
    // Function to automatically copy to clipboard and show notification
    function autoCopyToClipboard() {
        generatedPrompt.select();
        document.execCommand('copy');
        
        // Show notification
        copyNotification.classList.add('show');
        
        // Hide notification after 2 seconds
        setTimeout(function() {
            copyNotification.classList.remove('show');
        }, 2000);
    }

    // Generate a default prompt on page load
    generatePrompt();
}); 