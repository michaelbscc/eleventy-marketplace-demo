module.exports = (eleventyConfig) => {
  eleventyConfig.setTemplateFormats([
    'ejs',
    'css'
  ]);

  return {
    dir: {
      input: 'templates',
      output: 'build',
      data: '_data'
    }
  };
};
