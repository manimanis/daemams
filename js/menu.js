$(() => {
  const menu = [
    { 'Home': 'index.html' },
    {
      'DIKW': [
        { '<i class="video-icon"></i>Introduction': 'wkid-part01.html' },
        { '-': '---' },
        { 'Definitions': 'wkid-part02.html' },
        { 'Activities': 'wkid-part03.html' }
      ]
    },
    {
      'Data Types': [
        { '<i class="video-icon"></i>Data Types': 'data-types-part01.html' },
        { '<i class="video-icon"></i>Categorical data types': 'data-types-part02.html' },
        { '<i class="video-icon"></i>Quantitative data types': 'data-types-part03.html' },
        { '<i class="video-icon"></i>Summary': 'data-types-part04.html' },
        { '-': '---' },
        { 'Definitions': 'data-types-part05.html' },
        { 'Exercises': 'data-types-part06.html' },
      ]
    },
    {
      'Descriptive Statistics' : [
        { '<i class="video-icon"></i>Introduction': 'desc-stat-part01.html' },
        { '<i class="video-icon"></i>Measure of center (Mean)': 'desc-stat-part02.html' },
        { '<i class="video-icon"></i>Measure of center (Median)': 'desc-stat-part03.html' },
        { '<i class="video-icon"></i>Measure of center (Mode)': 'desc-stat-part04.html' },
        { '<i class="video-icon"></i>Measure of spread (Introduction)': 'desc-stat-part05.html' },
        { '<i class="video-icon"></i>Measure of spread (Histograms)': 'desc-stat-part06.html' },
        { '<i class="video-icon"></i>Measure of spread (Five numbers summary)': 'desc-stat-part07.html' },
        { '<i class="video-icon"></i>Measure of spread (Standard Deviation)': 'desc-stat-part08.html' },
        { '<i class="video-icon"></i>Shapes': 'desc-stat-part09.html' },
        { '<i class="video-icon"></i>Inferential Statistics': 'desc-stat-part11.html' },
        { '-': '---' },
        { 'Definitions': 'desc-stat-part12.html' },
        { 'Exercises': 'desc-stat-part13.html' },
      ]
    }
  ];
  const menuList = document.querySelector('#menu-list');
  for (let menuItem of menu) {
    Object.keys(menuItem).forEach((key, index) => {
      const isArray = Array.isArray(menuItem[key]);
      if (!isArray) {
        const li = $('<li>')
          .addClass('nav-item')
          .appendTo(menuList);
        const anchor = $('<a>')
          .addClass('nav-link')
          .attr('href', menuItem[key])
          .text(key)
          .appendTo(li);
      } else {
        const li = $('<li>')
          .addClass('nav-item dropdown')
          .appendTo(menuList);
        const anchor = $('<a>')
          .addClass('nav-link dropdown-toggle')
          .attr('href', '#')
          .attr('id', 'menuItem' + (index + 1) + 'DropDown')
          .attr('role', 'button')
          .attr('data-toggle', 'dropdown')
          .attr('aria-haspopup', 'true')
          .attr('aria-expanded', 'false')
          .html(key)
          .appendTo(li);
        const dropDownMenu = $('<div>')
          .addClass('dropdown-menu')
          .attr('aria-labelledby', 'menuItem' + (index + 1) + 'DropDown')
          .appendTo(li);
        menuItem[key].forEach(menuItemItem => {
          Object.keys(menuItemItem).forEach(menuItemKey => {
            if (menuItemItem[menuItemKey] === '---') {
              const divider = $('<div>')
                .addClass('dropdown-divider')
                .appendTo(dropDownMenu);
            } else {
              const anchor = $('<a>')
                .addClass('dropdown-item')
                .attr('href', menuItemItem[menuItemKey])
                .html(menuItemKey)
                .appendTo(dropDownMenu);
            }
          });
        });
      }
    });
  }
});