// ================= Global Variables: =================

const body = document.querySelector('body');

// Floating Icon Variables
const floatingIconContainer = document.querySelector('.floating-icon-container');

// Navigation Variables
const screenChangingIcons = {
	smartphoneIcon: document.querySelector('#screen-changing-icon-1'),
	tabletIcon: document.querySelector('#screen-changing-icon-2'),
	computerIcon: document.querySelector('#screen-changing-icon-3')
};
const {
	smartphoneIcon,
	tabletIcon,
	computerIcon
} = screenChangingIcons;

const parentNavigationBar = document.querySelector('.main-navbar-container');
const changeScreenIconsContainer = document.querySelector('.change-screen-icons-container');
const keyboardArrowUpContainer = document.querySelector('.keyboard-arrow-up-container');
const keyboardArrowUpIcon = document.querySelector('#keyboard-arrow-up-icon');

// Pop Up Screens Variables
const navbarLinkContainer1 = document.querySelector('.navbar-link-1-container');
const popUpContainer1 = document.querySelector('.shopping-cart-pop-up-container');
const popUpContent1 = document.querySelector('.shopping-cart-pop-up-content');
const shoppingCartSection1 = document.querySelector('.shopping-cart-section-1');
const shoppingCartSection2 = document.querySelector('.shopping-cart-section-2');
const popUpCancelBtn = document.querySelector('#pop-up-cancel-btn');
const popUpCancelBtnContainer = document.querySelector('.cancel-btn-container');
const checkBoxContainer = document.querySelector('.check-box-container');
const checkBoxItem = document.querySelector('#check-box-item');
const optionContainer = document.querySelector('.option-list');
const optionListText = document.querySelector('.option-list-text');
const licensePrice = document.querySelector('.license-price');
const optionExpanded = document.querySelector('.option-expended');
const optionBtnBox = document.querySelector('.option-btn-section-1');
const optionBtnBox2 = document.querySelector('.option-btn-section-2');
const optionBtnBox3 = document.querySelector('.option-btn-section-3');
const optionDivider = document.querySelector('.option-divider');
const optionDivider2 = document.querySelector('.option-divider-2');
const optionDivider3 = document.querySelector('.option-divider-3');
const optionRadioBtn1 = document.querySelector('#option-radio-btn-1');
const optionRadioBtn2 = document.querySelector('#option-radio-btn-2');
const optionRadioBtn3 = document.querySelector('#option-radio-btn-3');
const shoppingCartCheckBox = document.querySelector('#check-box-item');
const subTotalPrice = document.querySelector('#subtotal-price');
const continueToShop = document.querySelector('.continue-to-shop');

// Main Content Section Variables
const mainContentContainer = document.querySelector('.main-content-container');
const contentMainTitleContainer = document.querySelector('.content-main-title');
const contentMainTitleItem = document.querySelector('.content-main-title-item');
const contentMainTitleItem2 = document.querySelector('.content-main-title-item-2');
const contentMainLogo = document.querySelector('.content-main-logo');
const contentHeaderSection = document.querySelector('.content-header-section');
const pictureGallerySection = document.querySelector('.picture-gallery-section');

// Hiding nav bar when screen shrinks
let hideNavibarSystem = () => {
	parentNavigationBar.classList.toggle('toggle-nav');
	keyboardArrowUpContainer.classList.toggle('toggle-arrow-up-icon');
	keyboardArrowUpIcon.classList.toggle('toggle-arrow-rotate');
	mainContentContainer.classList.toggle('toggle-main-content');
}

// Shopping Cart Systems:
navbarLinkContainer1.addEventListener('click', () => {
	// Pop Up Screen 1
	popUpContainer1.style.backgroundColor = '#1e1e1ee6';
	popUpContainer1.style.opacity = '90%';
	// Pop Up Content 1
	popUpContainer1.style.display = 'flex';
	popUpContent1.style.display = 'flex';
	// Shopping Cart Section 1
	shoppingCartSection1.style.display = 'flex';
	shoppingCartSection2.style.display = 'flex';
	// Cancel Button
	popUpCancelBtn.style.display = 'grid';
	// Main Content
	mainContentContainer.style.display = "none";
});

popUpCancelBtn.addEventListener('click', () => {
	popUpContent1.style.display = 'none';
	popUpContainer1.style.display = 'none';
	popUpCancelBtn.style.display = 'none';
	shoppingCartSection1.style.display = 'none';
	shoppingCartSection2.style.display = 'none';
	mainContentContainer.style.display = 'flex';

});

checkBoxContainer.addEventListener('click', () => {
	checkBoxContainer.classList.toggle('check-box-toggle');
	checkBoxItem.style.color = '#f2f7fb';
});

optionContainer.addEventListener('click', () => {
	optionExpanded.classList.toggle('option-expanded-toggle');
});

optionBtnBox.addEventListener('mouseenter', () => {
	optionDivider.style.opacity = '0%';
});
optionBtnBox.addEventListener('mouseleave', () => {
	optionDivider.style.opacity = '100%';
});

optionBtnBox2.addEventListener('mouseenter', () => {
	optionDivider.style.opacity = '0%';
	optionDivider2.style.opacity = '0%';
});
optionBtnBox2.addEventListener('mouseleave', () => {
	optionDivider.style.opacity = '100%';
	optionDivider2.style.opacity = '100%';
});

optionBtnBox3.addEventListener('mouseenter', () => {
	optionDivider2.style.opacity = '0%';
});
optionBtnBox3.addEventListener('mouseleave', () => {
	optionDivider2.style.opacity = '100%';
});

let defaultPrice = 69;
let PersonalLicense = 69;
let CommercialLicense = 90;
let BuyoutLicense = 469;

optionBtnBox.addEventListener('click', () => {
	optionRadioBtn1.textContent = 'radio_button_checked';
	optionRadioBtn2.textContent = 'circle';
	optionRadioBtn3.textContent = 'circle';
	optionListText.textContent = 'Personal license';
	licensePrice.textContent = `$${PersonalLicense}`;
	subTotalPrice.textContent = `$${PersonalLicense}`;
});

optionBtnBox2.addEventListener('click', () => {
	optionRadioBtn2.textContent = 'radio_button_checked';
	optionRadioBtn1.textContent = 'circle';
	optionRadioBtn3.textContent = 'circle';
	optionListText.textContent = 'Commercial license';
	licensePrice.textContent = `$${CommercialLicense}`;
	subTotalPrice.textContent = `$${CommercialLicense}`;
});

optionBtnBox3.addEventListener('click', () => {
	optionRadioBtn3.textContent = 'radio_button_checked';
	optionRadioBtn2.textContent = 'circle';
	optionRadioBtn1.textContent = 'circle';
	optionListText.textContent = 'Buyout license';
	licensePrice.textContent = `$${BuyoutLicense}`;
	subTotalPrice.textContent = `$${BuyoutLicense}`;
});

continueToShop.addEventListener('click', () => {
	popUpContent1.style.display = 'none';
	popUpContainer1.style.display = 'none';
	popUpCancelBtn.style.display = 'none';
	shoppingCartSection1.style.display = 'none';
	shoppingCartSection2.style.display = 'none';
	mainContentContainer.style.display = 'flex';
});
