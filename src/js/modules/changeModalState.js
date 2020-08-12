import checkNumInputs from './checkNumInputs';

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#height');
    checkNumInputs('#width');

    function bindActionsToElem (event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {

                switch(item.nodeName) {
                    case 'SPAN':
                        state[prop] = i;
                        break;
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';

                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    case 
                        'SELECT':
                        state[prop] = item.value;
                        break;
                }

                console.log(state);
            });
        });
    }

    bindActionsToElem('click', windowForm, 'form');
    bindActionsToElem('input', windowWidth, 'width');
    bindActionsToElem('input', windowHeight, 'height');
    bindActionsToElem('change', windowType, 'type');
    bindActionsToElem('change', windowProfile, 'profile');
};

export default changeModalState;