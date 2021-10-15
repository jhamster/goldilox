
let default_schedule_type = "10-min";

function get_selected() {
    debugger
    selector = document.getElementById('type-selector');
    try {
        selector.value = schedule_type;
    }
    catch (error) {
        selector.value = default_schedule_type;
    }
    update_calendar();
}

function set_schedule_type(new_type) {
    debugger
    schedule_type = new_type;
}

function remove_old_calendar() {
    div_element = document.getElementById('schedule-calendly');
    div_element.removeChild(div_element.children[2]);
    div_element.removeChild(div_element.children[1]);
}

function update_calendar() {
    let s = document.getElementById('type-selector');
    let type = s.options[s.selectedIndex].value;
    switch(type) {
        case ('select'):
            div_element = document.getElementById('schedule-calendly');
            if (div_element.children[1]) {
                remove_old_calendar();
            }
            break;
        case ('10-min'):
            div_element = document.getElementById('schedule-calendly');
            if (div_element.children[1]) {
                remove_old_calendar();
            }
            Calendly.initInlineWidget({
                url: 'https://calendly.com/goldiloxsalon/15min',
                parentElement: document.getElementById('schedule-calendly'),
                prefill: {},
                utm: {}
            });
            break;
        case ('30-min'):
            div_element = document.getElementById('schedule-calendly');
            if (div_element.children[1]) {
                remove_old_calendar();
            }
            Calendly.initInlineWidget({
                url: 'https://calendly.com/goldiloxsalon/menscut',
                parentElement: document.getElementById('schedule-calendly'),
                prefill: {},
                utm: {}
            });
            break;
        case ('1-hour'):
            div_element = document.getElementById('schedule-calendly');
            if (div_element.children[1]) {
                remove_old_calendar();
            }
            Calendly.initInlineWidget({
                url: 'https://calendly.com/goldiloxsalon/60min',
                parentElement: document.getElementById('schedule-calendly'),
                prefill: {},
                utm: {}
            });
            break;
        case ('2-hour +'):
            div_element = document.getElementById('schedule-calendly');
            if (div_element.children[1]) {
                remove_old_calendar();
            }
            Calendly.initInlineWidget({
                url: 'https://calendly.com/goldiloxsalon/2-hour-appointment',
                parentElement: document.getElementById('schedule-calendly'),
                prefill: {},
                utm: {}
            });
            break;
        default:
            div_element = document.getElementById('schedule-calendly');
            if (div_element.children[1]) {
                remove_old_calendar();
            }
            Calendly.initInlineWidget({
                url: 'https://calendly.com/goldiloxsalon/15min',
                parentElement: document.getElementById('schedule-calendly'),
                prefill: {},
                utm: {}
            });
            break;
    }
}