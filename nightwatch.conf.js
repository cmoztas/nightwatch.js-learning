module.exports = {
  src_folders: ['tests'],
  page_objects_path: ['page-objects'],

  selenium: {
    start_process: true
  },

  webdriver: {
    start_process: true,
    port: 9515,
    server_path: 'node_modules/.bin/chromedriver',
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
          args: [
            '--headless'
          ]
        }
      }
    }
  }
}