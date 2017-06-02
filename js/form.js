(function ($) {

    Parsley.addValidator('emailOrPhone', {
        messages: {
            en: 'Please enter your E-mail or Phone number!',
            ru: 'Пожалуйста введите E-mail или Номер телефона!'
        },
        requirementType: 'integer',
        validate: function(_value, requirement, instance) {
            if (instance.parent.isValid({group: 'email', force: true})) return true;
            if (instance.parent.isValid({group: 'phone', force: true})) return true;
            return false; // No section is filled, this validation fails
        }
    });

    $.fn.setFormValidation = function() {

        var settings = {
            successClass: "has-success",
            errorClass: "has-error tex",
            classHandler: function(el) {
                return el.$element.closest(".form-group");
            },
            errorsWrapper: "<span class='help-block'></span>",
            errorTemplate: "<span class='text-danger'></span>",
            inputs: Parsley.options.inputs + ',[data-parsley-email-or-phone]'
        };

        return this.each(function () {
            $(this)
                .parsley(settings);
        })
    };

    $('document').ready(function () {
        $('.js-form-validation').setFormValidation();
    })
})(jQuery);
