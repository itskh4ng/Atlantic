(function () {
    const themes = {
        cherry: {
            "--img": "url('https://i.imgur.com/SAh2P1S.jpeg')",
        },
        white: {
            "--img": "url('https://i.pinimg.com/originals/49/e4/4b/49e44b6771c32e08e69d3f24040fd59d.gif')",
        },
        blue: {
            "--img": "url('https://64.media.tumblr.com/1b7c6b1edc0f22df6dbbb0854c53db98/tumblr_o4h5q0HqPB1u7gnm9o1_500.gif')",
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

