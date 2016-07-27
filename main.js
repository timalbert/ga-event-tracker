/*
 * Google Event Tracker v1.0.0
 * Contributing Author: Tim Albert
 */

(function ($) {

<<<<<<< f8d8d335c1ce1b3c7a84f4093e4d895e81df9d35
  console.log('hemon');

  // data-ga-click="homepage hero, click: cta, item: More"

=======
  // data-ga-click="homepage hero, click: cta, item: More"
  // data-ga-click="header, click: navigation, item: Logo"
>>>>>>> initial commit
  $('[data-ga-click]').click(function(e) {

    var ga_event = $(this).data('ga-click'),
        ga_event_split = ga_event.split(','),
        ga_event_category = ga_event_split[0],
        ga_event_action = ga_event_split[1],
        ga_event_label = ga_event_split[2];

<<<<<<< f8d8d335c1ce1b3c7a84f4093e4d895e81df9d35
    console.log(ga_event_category, ga_event_action, ga_event_label);

=======
>>>>>>> initial commit
    ga('send', {
      hitType: 'event',
      eventCategory: ga_event_category,
      eventAction: ga_event_action,
      eventLabel: ga_event_label
    });

  });

<<<<<<< f8d8d335c1ce1b3c7a84f4093e4d895e81df9d35
})(jQuery);
=======
})(jQuery);
>>>>>>> initial commit
