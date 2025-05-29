module.exports = function(eleventyConfig) {
    // Set the pathPrefix for your subdirectory blog (e.g., mydomain.com/blog/)
    eleventyConfig.addGlobalData("pathPrefix", "/blog/");
  
    // You can add other configurations here, such as:
    // eleventyConfig.addPassthroughCopy("src/css"); // Example for passing through CSS files
  
    return {
      // You can specify your input and output directories here if they are not default
      // input: "src", // Default is .
      // output: "_site", // Default is _site
      pathPrefix: "/blog/", // This is also often set here, mirroring addGlobalData
      markdownTemplateEngine: "njk",
      htmlTemplateEngine: "njk",
      dataTemplateEngine: "njk",
    };
  };