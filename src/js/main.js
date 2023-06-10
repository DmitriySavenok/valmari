import './vendor';
import './helpers';
import './components/social';
import {ieFix} from './vendor/ie-fix';
import {vhFix} from './vendor/vh-fix';
import './vendor/choices.min';
import {actualYear} from './modules/actualYear';
import header from './components/header';
import course from'./components/course';
import masterClasses from'./components/masterClasses';
import lazyLoading from './modules/lazyLoading';
import scrollToAnchor from './modules/scrollToAnchor';

ieFix();
vhFix();
actualYear();
scrollToAnchor.init();

header.openHeaderMenu();
header.languageSelect();
course.courseSlider();
masterClasses.masterClassesSlider();
lazyLoading.init();
