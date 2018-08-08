
$(function ()
    {
        var $projectsButton = $('a.projects');
        var $javaButton = $('a.java');
        var $cButton = $('a.C');
        var $assemblerButton = $('a.assembler');
        var $avrButton = $('a.avr');
        var $projectsMenu = $('div.projects');
        var $langMenu = $('div.projects-lang');
        var $menu = $('.menu');
        var $javaMenu = $('div.projects-java');
        var $cMenu = $('div.projects-c');
        var $assemblerMenu = $('div.projects-assembler');
        var $avrMenu = $('div.projects-avr');
        var $elMenu = $('div.projects-element');

        $projectsButton.on('mouseover click', function () {
            $langMenu.css(
                {
                    'display': 'block',
                }
            );
        });

        $javaButton.on('mouseover click', function () {
            $projectsMenu.css(
                {
                    'display': 'block'
                }
            );
            $javaMenu.css(
                {
                    'display': 'block'
                }
            );
            $cMenu.css(
                {
                    'display': 'none'
                }
            );
            $assemblerMenu.css(
                {
                    'display': 'none'
                }
            );
            $avrMenu.css(
                {
                    'display': 'none'
                }
            );
            $elMenu.css(
                {
                    'margin-top': '45px'
                }
            );
        });

        $cButton.on('mouseover click', function () {
            $projectsMenu.css(
                {
                    'display': 'block'
                }
            );
            $cMenu.css(
                {
                    'display': 'block'
                }
            );
            $javaMenu.css(
                {
                    'display': 'none'
                }
            );
            $assemblerMenu.css(
                {
                    'display': 'none'
                }
            );
            $avrMenu.css(
                {
                    'display': 'none'
                }
            );
            $elMenu.css(
                {
                    'margin-top': '87px'
                }
            );
        });

        $assemblerButton.on('mouseover click', function () {
            $projectsMenu.css(
                {
                    'display': 'block'
                }
            );
            $assemblerMenu.css(
                {
                    'display': 'block'
                }
            );
            $javaMenu.css(
                {
                    'display': 'none'
                }
            );
            $cMenu.css(
                {
                    'display': 'none'
                }
            );
            $avrMenu.css(
                {
                    'display': 'none'
                }
            );
            $elMenu.css(
                {
                    'margin-top': '120px'
                }
            );
        });

        $avrButton.on('mouseover click', function () {
            $projectsMenu.css(
                {
                    'display': 'block'
                }
            );
            $avrMenu.css(
                {
                    'display': 'block'
                }
            );
            $javaMenu.css(
                {
                    'display': 'none'
                }
            );
            $cMenu.css(
                {
                    'display': 'none'
                }
            );
            $assemblerMenu.css(
                {
                    'display': 'none'
                }
            );
            $elMenu.css(
                {
                    'margin-top': '160px'
                }
            );
        });

        $menu.on('mouseleave', function () {
            $projectsMenu.css(
                {
                    'display': 'none'
                }
            );
            $langMenu.css(
                {
                    'display': 'none'
                }
            );
        });

        $('div.home, a.about').on('mouseenter', function () {
            $projectsMenu.css(
                {
                    'display': 'none'
                }
            );
            $langMenu.css(
                {
                    'display': 'none'
                }
            );
        });
    });