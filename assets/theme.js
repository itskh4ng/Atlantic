(function () {
    const themes = {
        cherry: {
            "--img": "url('https://i.imgur.com/SAh2P1S.jpeg')",
        },
        white: {
            "--img": "url('https://i.pinimg.com/originals/49/e4/4b/49e44b6771c32e08e69d3f24040fd59d.gif')",
        },
        blue: {
            "--img": "url('https://4kwallpapers.com/images/walls/thumbs_3t/8228.jpg')",
        }
    };

    function applyTheme(theme) {
        if (themes[theme]) {
            Object.entries(themes[theme]).forEach(([key, value]) => {
                document.documentElement.style.setProperty(key, value);
            });
        }
    }

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme && themes[savedTheme]) {
        applyTheme(savedTheme);
    }
})();

