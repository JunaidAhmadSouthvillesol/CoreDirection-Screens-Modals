$(document).ready(function () {
	/*=========================================
			site-header-toggle button
	=========================================*/
	$('#header .container-fluid .btn-open').click(function () {
		$('#header .container-fluid .navbar').show();
		$(this).hide();
		$('#header .container-fluid .btn-close').show();
	});

	$('#header .container-fluid .btn-close').click(function () {
		$('#header .container-fluid .navbar').hide();
		$(this).hide();
		$('#header .container-fluid .btn-open').show();
	});


	/*=========================================
					card-slider
	=========================================*/
	const swiper = new Swiper('.gyms-health-swiper-container, .classes-activities-swiper-container,.our-partners-swiper-container, .find-activity-swiper-container, .community-swiper-container, .mass-events-swiper-container, .fitness-villages-swiper-container, .fitness-hubs-swiper-container, .business-profile-menu-tab-swiper-container', {
		slidesPerView: "auto",
		// mousewheel: true,
		keyboard: true,
		freeMode: true,
	});


	/*=========================================
					bookings
	=========================================*/
	const swiper1 = new Swiper('.booking-swiper-container', {
		slidesPerView: "auto",
		// mousewheel: true,
		keyboard: true,
		freeMode: true,
	});


	/*=========================================
				upcoming-bookings-1
	=========================================*/
	const swiper10 = new Swiper('.upcoming-booking-swiper-container-1', {
		slidesPerView: "auto",
		// mousewheel: true,
		keyboard: true,
		freeMode: true,

		// If we need pagination
		pagination: {
			el: '.upcoming-bookings-swiper-pagination-1',
			clickable: true,
		},
	});

	/*=========================================
				upcoming-bookings-2
	=========================================*/
	const swiper11 = new Swiper('.upcoming-booking-swiper-container-2', {
		slidesPerView: "auto",
		// mousewheel: true,
		keyboard: true,
		freeMode: true,

		// If we need pagination
		pagination: {
			el: '.upcoming-bookings-swiper-pagination-2',
			clickable: true,
		},
	});

	/*=========================================
				upcoming-bookings-3
	=========================================*/
	const swiper12 = new Swiper('.upcoming-booking-swiper-container-3', {
		slidesPerView: "auto",
		// mousewheel: true,
		keyboard: true,
		freeMode: true,

		// If we need pagination
		pagination: {
			el: '.upcoming-bookings-swiper-pagination-3',
			clickable: true,
		},
	});


	/*=========================================
					favourites
	=========================================*/
	const swiper2 = new Swiper('.favourite-swiper-container', {
		slidesPerView: "auto",
		// mousewheel: true,
		keyboard: true,
		freeMode: true,
		// If we need pagination
		pagination: {
			el: '.favourites-swiper-pagination',
			clickable: true,
		},
	});


	/*=========================================
		input-field-micro-interactions
	=========================================*/
	$('input').on('focusin', function () {
		$(this).parent().find('label').addClass('active');
	});

	$('input').on('focusout', function () {
		if (!this.value) {
			$(this).parent().find('label').removeClass('active');
		}
	});

	$('textarea').on('focusin', function () {
		$(this).parent().find('label').addClass('active');
	});

	$('textarea').on('focusout', function () {
		if (!this.value) {
			$(this).parent().find('label').removeClass('active');
		}
	});


	/*=========================================
					filters
	=========================================*/
	// location
	$('.input-field-search-box .location').click(function () {
		$('.input-field-search-box .manual-location-field-box').toggle();
		$('.input-field-category-box .category-field-box').hide();
		$('.input-field-date-box .calendar-field-box').hide();
		$('.input-field-category-box .svg-category-icon').removeClass('active');
	});

	// category
	$('.input-field-category-box svg').click(function () {
		$('.input-field-search-box .manual-location-field-box').hide();
		$('.input-field-category-box .category-field-box').toggle();
		$('.input-field-category-box .svg-category-icon').toggleClass('active');
		$('.input-field-date-box .calendar-field-box').hide();
	});

	// calendar
	$('.input-field-date-box .calendar').click(function () {
		$('.input-field-search-box .manual-location-field-box').hide();
		$('.input-field-category-box .category-field-box').hide();
		$('.input-field-date-box .calendar-field-box').show();
		$('.input-field-category-box .svg-category-icon').removeClass('active');
	});
	$('.calendar-field-header svg').click(function () {
		$('.input-field-date-box .calendar-field-box').hide();
	});

	// close filter-fields when user click on anything other than content
	$(document).mouseup(function (e) {
		var container = new Array();
		container.push($('.calendar-field-box'));
		container.push($('.category-field-box'));
		container.push($('.manual-location-field-box'));

		$.each(container, function (key, value) {
			if (!$(value).is(e.target) // if the target of the click isn't the container...
				&&
				$(value).has(e.target).length === 0) // ... nor a descendant of the container
			{
				$(value).hide();
				$('.input-field-category-box .svg-category-icon').removeClass('active');
			}
		});
	});


	/*=========================================
			app-header-toggle button
	=========================================*/
	$('#app-header .container-fluid .btn-open').click(function () {
		$('#app-header .container-fluid .navbar').show();
		$(this).hide();
		$('#app-header .container-fluid .btn-close').show();
	});

	$('#app-header .container-fluid .btn-close').click(function () {
		$('#app-header .container-fluid .navbar').hide();
		$(this).hide();
		$('#app-header .container-fluid .btn-open').show();
	});

	// notifications
	$('#app-header .container-fluid .account-controlls .notifications').click(function () {
		$('.account-controlls .profile .profile-window').hide();
		$('.account-controlls .notification-window').toggle();
	});
	$('#app-header .container-fluid .account-controlls .notification-window .notification-body .notification-content-button-box button').click(function () {
		$('#app-header .container-fluid .account-controlls .notification-window .notification-body .notification-content-button-box').hide();
	});

	// profile
	$('#app-header .container-fluid .account-controlls .profile .account-controlls-link').click(function () {
		$('.account-controlls .profile .profile-window').toggle();
		$('.account-controlls .notification-window').hide();
	});
	$('#app-header .container-fluid .account-controlls .profile-window .profile-body .profile-list .profile-item .theme-toggle-btn').click(function () {
		$('#app-header .container-fluid .account-controlls .profile-window .profile-body .profile-list .profile-item .sub-menu').toggle();
		$('#app-header .container-fluid .account-controlls .profile-window .profile-body .profile-list .profile-item .arrow-down').toggleClass('active');
	});
});


$('.btn-signin').click(function () {
	$('#body').removeClass('overflow-y-scroll');
	$('#body').addClass('overflow-y-hidden');
	$('.custom-modal').addClass('overflow-y-auto');
	$('.custom-modal').hide();
	$('#signin-modal').show();
});

$('.btn-signup').click(function () {
	$('#body').removeClass('overflow-y-scroll');
	$('#body').addClass('overflow-y-hidden');
	$('.custom-modal').addClass('overflow-y-auto');
	$('.custom-modal').hide();
	$('#signup-modal').show();
});

$('.add-activity').click(function () {
	$('#body').removeClass('overflow-y-scroll');
	$('#body').addClass('overflow-y-hidden');
	$('.custom-modal').addClass('overflow-y-auto');
	$('.custom-modal').hide();
	$('#add-activity-modal').show();
});

$('.custom-modal .btn-modal-close').click(function () {
	$('#body').removeClass('overflow-y-hidden');
	$('#body').addClass('overflow-y-scroll');
	$('.custom-modal').removeClass('overflow-y-auto');
	$('.custom-modal').hide();
});


/*=========================================
		dashboard filter btns
=========================================*/
$(document).ready(function () {
	$('.btn-filter-gym-health').click(function () {
		$('.btn-filter-gym-health').toggleClass('selected');
		$('#filter-gyms-health').toggle();
		const swiper3 = new Swiper('.filter-gyms-health-swiper-container', {
			slidesPerView: "auto",
			// mousewheel: true,
			keyboard: true,
			freeMode: true,
		});

		$(".btn-filter-classes-activities").removeClass('selected');
		$('#filter-classes-activities').hide();

		$(".btn-filter-pools-beaches").removeClass('selected');
		$('#filter-pools-beaches').hide();

		$(".btn-filter-events-experiences").removeClass('selected');
		$('#filter-events-experiences').hide();

		$(".btn-friends").removeClass('selected');
		$('#friends').hide();

		$(".btn-groups").removeClass('selected');
		$('#groups').hide();

		$(".btn-challenges").removeClass('selected');
		$('#challenges').hide();
	});

	$(".btn-filter-classes-activities").click(function () {
		$('.btn-filter-gym-health').removeClass('selected');
		$('#filter-gyms-health').hide();

		$(".btn-filter-classes-activities").toggleClass('selected');
		$('#filter-classes-activities').toggle();
		const swiper4 = new Swiper('.filter-classes-activities-swiper-container', {
			slidesPerView: "auto",
			// mousewheel: true,
			keyboard: true,
			freeMode: true,
		});

		$(".btn-filter-pools-beaches").removeClass('selected');
		$('#filter-pools-beaches').hide();

		$(".btn-filter-events-experiences").removeClass('selected');
		$('#filter-events-experiences').hide();

		$(".btn-friends").removeClass('selected');
		$('#friends').hide();

		$(".btn-groups").removeClass('selected');
		$('#groups').hide();

		$(".btn-challenges").removeClass('selected');
		$('#challenges').hide();
	});

	$(".btn-filter-pools-beaches").click(function () {
		$('.btn-filter-gym-health').removeClass('selected');
		$('#filter-gyms-health').hide();

		$(".btn-filter-classes-activities").removeClass('selected');
		$('#filter-classes-activities').hide();

		$(".btn-filter-pools-beaches").toggleClass('selected');
		$('#filter-pools-beaches').toggle();
		const swiper5 = new Swiper('.filter-pools-beaches-swiper-container', {
			slidesPerView: "auto",
			// mousewheel: true,
			keyboard: true,
			freeMode: true,
		});

		$(".btn-filter-events-experiences").removeClass('selected');
		$('#filter-events-experiences').hide();

		$(".btn-friends").removeClass('selected');
		$('#friends').hide();

		$(".btn-groups").removeClass('selected');
		$('#groups').hide();

		$(".btn-challenges").removeClass('selected');
		$('#challenges').hide();
	});

	$(".btn-filter-events-experiences").click(function () {
		$('.btn-filter-gym-health').removeClass('selected');
		$('#filter-gyms-health').hide();

		$(".btn-filter-classes-activities").removeClass('selected');
		$('#filter-classes-activities').hide();

		$(".btn-filter-pools-beaches").removeClass('selected');
		$('#filter-pools-beaches').hide();

		$(".btn-filter-events-experiences").toggleClass('selected');
		$('#filter-events-experiences').toggle();
		const swiper6 = new Swiper('.filter-events-experiences-swiper-container', {
			slidesPerView: "auto",
			// mousewheel: true,
			keyboard: true,
			freeMode: true,
		});

		$(".btn-friends").removeClass('selected');
		$('#friends').hide();

		$(".btn-groups").removeClass('selected');
		$('#groups').hide();

		$(".btn-challenges").removeClass('selected');
		$('#challenges').hide();
	});

	$(".btn-friends").click(function () {
		$('.btn-filter-gym-health').removeClass('selected');
		$('#filter-gyms-health').hide();

		$(".btn-filter-classes-activities").removeClass('selected');
		$('#filter-classes-activities').hide();

		$(".btn-filter-pools-beaches").removeClass('selected');
		$('#filter-pools-beaches').hide();

		$(".btn-filter-events-experiences").removeClass('selected');
		$('#filter-events-experiences').hide();

		$(".btn-friends").toggleClass('selected');
		$('#friends').toggle();
		const swiper7 = new Swiper('.friend-swiper-container', {
			slidesPerView: "auto",
			// mousewheel: true,
			keyboard: true,
			freeMode: true,
		});

		$(".btn-groups").removeClass('selected');
		$('#groups').hide();

		$(".btn-challenges").removeClass('selected');
		$('#challenges').hide();
	});

	$(".btn-groups").click(function () {
		$('.btn-filter-gym-health').removeClass('selected');
		$('#filter-gyms-health').hide();

		$(".btn-filter-classes-activities").removeClass('selected');
		$('#filter-classes-activities').hide();

		$(".btn-filter-pools-beaches").removeClass('selected');
		$('#filter-pools-beaches').hide();

		$(".btn-filter-events-experiences").removeClass('selected');
		$('#filter-events-experiences').hide();

		$(".btn-friends").removeClass('selected');
		$('#friends').hide();

		$(".btn-groups").toggleClass('selected');
		$('#groups').toggle();
		const swiper8 = new Swiper('.filter-groups-swiper-container', {
			slidesPerView: "auto",
			// mousewheel: true,
			keyboard: true,
			freeMode: true,
		});

		$(".btn-challenges").removeClass('selected');
		$('#challenges').hide();
	});

	$("#groups .btn-add-new").click(function () {
		$('.btn-filter-gym-health').removeClass('selected');
		$('#filter-gyms-health').hide();

		$(".btn-filter-classes-activities").removeClass('selected');
		$('#filter-classes-activities').hide();

		$(".btn-filter-pools-beaches").removeClass('selected');
		$('#filter-pools-beaches').hide();

		$(".btn-filter-events-experiences").removeClass('selected');
		$('#filter-events-experiences').hide();

		$(".btn-friends").removeClass('selected');
		$('#friends').hide();

		$('#body').removeClass('overflow-y-scroll');
		$('#body').addClass('overflow-y-hidden');
		$('.custom-modal').addClass('overflow-y-auto');
		$('.custom-modal').hide();
		$('#add-group-modal').toggle();

		$(".btn-challenges").removeClass('selected');
		$('#challenges').hide();
	});

	$(".btn-challenges").click(function () {
		$('.btn-filter-gym-health').removeClass('selected');
		$('#filter-gyms-health').hide();

		$(".btn-filter-classes-activities").removeClass('selected');
		$('#filter-classes-activities').hide();

		$(".btn-filter-pools-beaches").removeClass('selected');
		$('#filter-pools-beaches').hide();

		$(".btn-filter-events-experiences").removeClass('selected');
		$('#filter-events-experiences').hide();

		$(".btn-friends").removeClass('selected');
		$('#friends').hide();

		$(".btn-groups").removeClass('selected');
		$('#groups').hide();

		$(".btn-challenges").toggleClass('selected');
		$('#challenges').toggle();
		const swiper9 = new Swiper('.filter-challenges-swiper-container', {
			slidesPerView: "auto",
			// mousewheel: true,
			keyboard: true,
			freeMode: true,
		});
	});

	$("#challenges .btn-add-new").click(function () {
		$('.btn-filter-gym-health').removeClass('selected');
		$('#filter-gyms-health').hide();

		$(".btn-filter-classes-activities").removeClass('selected');
		$('#filter-classes-activities').hide();

		$(".btn-filter-pools-beaches").removeClass('selected');
		$('#filter-pools-beaches').hide();

		$(".btn-filter-events-experiences").removeClass('selected');
		$('#filter-events-experiences').hide();

		$(".btn-friends").removeClass('selected');
		$('#friends').hide();

		$(".btn-groups").removeClass('selected');
		$('#groups').hide();

		$('#add-group-modal').hide();

		$('#body').removeClass('overflow-y-scroll');
		$('#body').addClass('overflow-y-hidden');
		$('.custom-modal').addClass('overflow-y-auto');
		$('.custom-modal').hide();
		$('#add-challenge-modal').toggle();
	});
});


/*=========================================
			profile-img-upload
=========================================*/
$(document).ready(function () {
	var readURL = function (input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			reader.onload = function (e) {
				$('.profile-pic').show();
				$('.profile-pic').attr('src', e.target.result);
			};
			reader.readAsDataURL(input.files[0]);
		}
	};
	$(".file-upload").on('change', function () {
		readURL(this);
	});
	$(".upload-button").on('click', function () {
		$(".file-upload").click();
	});

	// signup-nationality-dropdown
	$(".nationality-field-box .btn-dropdown").on('click', function () {
		$(".nationality-field-box .add-activity-type-field-body").toggle();
		$(".gender-field-box .add-activity-type-field-body").hide();
	});

	// signin-gender-dropdown
	$(".gender-field-box .btn-dropdown").on('click', function () {
		$(".nationality-field-box .add-activity-type-field-body").hide();
		$(".gender-field-box .add-activity-type-field-body").toggle();
	});
});


/*=========================================
		add activity dropdown
=========================================*/
$(document).ready(function () {
	$(".btn-dropdown").on('click', function () {
		$(".add-activity-type-field-box .add-activity-type-field-body").toggle();
	});

	$(".add-activity-type-field-body .type-item").on('click', function () {
		$(".add-activity-type-field-body").hide();
	});
});


/*=========================================
			dashboard modal
=========================================*/
$(document).ready(function () {
	$(".add-activity").on('click', function () {
		$('#body').removeClass('overflow-y-scroll');
		$('#body').addClass('overflow-y-hidden');
		$('.custom-modal').addClass('overflow-y-auto');
		$('.custom-modal').hide();
		$("#add-activity-modal").show();
	});
	$("#add-activity-modal .add-activity-btn-submit").on('click', function () {
		$('#body').removeClass('overflow-y-scroll');
		$('#body').addClass('overflow-y-hidden');
		$('.custom-modal').addClass('overflow-y-auto');
		$('.custom-modal').hide();
		$("#inspire-your-network-modal").show();
	});
	$("#inspire-your-network-modal .search-add-friend").on('click', function () {
		$('#body').removeClass('overflow-y-scroll');
		$('#body').addClass('overflow-y-hidden');
		$('.custom-modal').addClass('overflow-y-auto');
		$('.custom-modal').hide();
		$("#search-add-friend-modal").show();
	});
	$("#search-add-friend-modal .friend-btn-box .btn-add-friend-box").on('click', function () {
		$(this).hide();
		$("#search-add-friend-modal .friend-btn-box .btn-friend-added-box").toggle();
	});
	$("#search-add-friend-modal .friend-btn-box .btn-friend-added-box").on('click', function () {
		$(this).hide();
		$("#search-add-friend-modal .friend-btn-box .btn-add-friend-box").toggle();
	});
	$("#add-group-modal .add-group-btn-submit").on('click', function () {
		$('#body').removeClass('overflow-y-scroll');
		$('#body').addClass('overflow-y-hidden');
		$('.custom-modal').addClass('overflow-y-auto');
		$('.custom-modal').hide();
		$("#inspire-your-network-modal").toggle();
	});

	$("#add-challenge-modal .add-challenge-btn-submit").on('click', function () {
		$('#body').removeClass('overflow-y-scroll');
		$('#body').addClass('overflow-y-hidden');
		$('.custom-modal').addClass('overflow-y-auto');
		$('.custom-modal').hide();
		$("#inspire-your-network-modal").toggle();
	});

	$("#friends .add-friend").on('click', function () {
		$('#body').removeClass('overflow-y-scroll');
		$('#body').addClass('overflow-y-hidden');
		$('.custom-modal').addClass('overflow-y-auto');
		$('.custom-modal').hide();
		$("#add-friend-modal").toggle();
	});

	$("#dashboard .connect-wearable").on('click', function () {
		$('#body').removeClass('overflow-y-scroll');
		$('#body').addClass('overflow-y-hidden');
		$('.custom-modal').addClass('overflow-y-auto');
		$('.custom-modal').hide();
		$("#connect-wearable-modal").toggle();
	});
});



//=========================================
//		filter-items-layout-toggle
//=========================================
$(document).ready(function () {
	$('.three-layout-box').click(function () {
		$('.filter-items-inner-box').addClass("three-columns");
		$('.four-layout-box').removeClass('active');
		$(this).addClass('active');
	});
	$('.four-layout-box').click(function () {
		$('.filter-items-inner-box').removeClass("three-columns");
		$('.three-layout-box').removeClass('active');
		$(this).addClass('active');
	});
});



//=========================================
//					legal
//=========================================
$(document).ready(function () {
	$('#legal .legal-content-header .btn-sidebar-toggle').click(function () {
		$('#legal .legal-sidebar').css('width', '299px');
	});
	$('#legal .legal-sidebar .btn-sidebar-toggle').click(function () {
		$('#legal .legal-sidebar').css('width', '0px');
	});

	$('#legal .legal-content-header .btn-search-bar-toggle').click(function () {
		$('#legal .legal-content-header .legal-content-header-inner-box .legal-content-header-title').toggle();
		$('#legal .legal-content-header .legal-content-header-inner-box .legal-content-header-search-field').toggle();
	});
});



//=========================================
//					contact-us
//=========================================
$(document).ready(function () {
	$('.btn-live-chat-toggle-inner-box').click(function () {
		$('.customer-support-live-chat-outer-box').toggle();
		$('.customer-support-live-chat').toggleClass('chat-open');
		$('.btn-live-chat-toggle').toggleClass('chat-close');
		
		$('#body').toggleClass('overflow-y-hidden');
	});

	$('.customer-support-live-chat .btn-chat-close').click(function () {
		$('.customer-support-live-chat-outer-box').hide();
		$('.customer-support-live-chat').removeClass('chat-open');
		$('.btn-live-chat-toggle').addClass('chat-close');
		$('#body').toggleClass('overflow-y-hidden');
	});
});



$("button").parents('.card').css("box-shadow", "unset");

$(document).ready(function () {
    $(".member-login, .corporate-wellness.html, .event-consultancy").hover(function () {
        $(this).toggleClass("overlay");
        $(".overlay").addClass("opacity");
        $(this).removeClass("opacity");
    });
});
$(document).ready(function () {
    $(".member-login, .corporate-wellness.html, .event-consultancy").click(function () {
        $(".member-login, .corporate-wellness.html, .event-consultancy").removeClass("active");
        $(this).addClass("active");
    });
});