(function () {
    const themes = {
        cherry: {
            "--img": "url('https://64.media.tumblr.com/f5380d5f80ad4786c2ec88c1cfbf7638/4ba7ad635ccb47ed-9d/s640x960/34ea112ed57bb7dc3da19e6ae15780e6bb4a96a1.gif')",
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

