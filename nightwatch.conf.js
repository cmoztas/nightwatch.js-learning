require('dotenv').config();

module.exports = {
  src_folders: ['tests'],
  page_objects_path: ['page-objects'],

  webdriver: {
    start_process: true,
    port: 9515,
    server_path: require('chromedriver').path,
    cli_args: []
  },

  test_settings: {
    default: {
      screenshots: {
        enabled: true,
        on_failure: true,
        on_error: true,
        path: 'tests_output/screenshots'
      },
      desiredCapabilities: {
        browserName: "chrome",
        chromeOptions: {
          args: ['--headless']
        }
      }
    }
  }
}