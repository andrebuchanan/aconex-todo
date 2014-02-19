# aconex-todo

## Design

This is a simple todo application allowing users to enter a text-only list of tasks. Tasks may be marked as
important, in which case they are moved to the top of the list. These important tasks may be demoted. Tasks may be
marked as complete or done, in which case they are hidden from the user by default. The user has the option of 
viewing all tasks, or only outstanding tasks. Tasks may be deleted, in which case they are removed from the list entirely.

The visuals of the application are minimalist and clean.

New task entry is designed to be very quick, especially when the keyboard is used to create a new task (Enter key).

## Approach

The application brief specified several criteria, refer breif for details. In order to rapidly meet criteria I used yeoman
scaffolding to quickly build a suitable framework. Via Yeoman I chose to utlise the following technologies in order to meet specified
criteria:

* AngularJS for core application structure and functionality
* Bootstrap for cross-browser, and responsive UI
* Grunt - including various grunt tasks - for development workflow
* Karma with Jasmine for unit tests
* Protractor for e2e testing
* Git(hub) for source storage and version control

Once the framework was in place, I began by prototyping some basic structure. With that in place I built several unit tests
and fleshed out functionity. This was my general approach as development proceeded.

At some point I realised there were some requirement unique to the submission of this task, so I took a break and set 
about implementing those; namely augmenting or disabling several scaffolded build related issues so the application
could be run from a file, rather than web sever.

Once all functionality was finalised and the visual design in place, I began reviewing the code and the UI. During the
code review I established there were several areas in need of improvement / refactor. I was not super happy with the
visual design and began an iterative improvement.

Finally, I filled in some testing blanks and implemented a basic functional test (using Protractor) for entering a new 
task. And then I wrote this README.

EOM
