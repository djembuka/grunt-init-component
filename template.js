/*
 * grunt-init-www
 * For Twin px use only
 *
 * Copyright (c) 2014 Tatiana
 */

'use strict';

// Basic template description.
exports.description = 'Create a component';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'A template for component';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = 'template.jade';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({}, [
    // Prompt for these values.
    {
      name: 'name',
      message: 'Enter the component name',
      default: 'new',
      warning: ''
    }
  ], function(err, props) {

    // Files to copy (and process).
    var files = init.filesToCopy();

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // All done!
    done();
  });

};
