(function () {
    const themes = {
        cherry: { "--img": "url('https://i.imgur.com/SAh2P1S.jpeg')" },
        blue: { "--img": "url('https://4kwallpapers.com/images/walls/thumbs_3t/8228.jpg')" }
    };

    function applyTheme(theme) {
        if (themes[theme]) {
            Object.entries(themes[theme]).forEach(([key, value]) => {
                document.documentElement.style.setProperty(key, value);
            });
            localStorage.setItem("theme", theme);
        }
    }

    const savedTheme = localStorage.getItem("theme");
    applyTheme(savedTheme && themes[savedTheme] ? savedTheme : "blue");
})();
