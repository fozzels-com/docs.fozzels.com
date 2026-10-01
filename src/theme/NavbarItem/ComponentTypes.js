/**
 * Registers custom navbar item types on top of the theme defaults.
 * Custom navbar item types must be prefixed with `custom-`.
 */
import ComponentTypes from '@theme-original/NavbarItem/ComponentTypes';
import MobileLocaleSwitcherNavbarItem from '@theme/NavbarItem/MobileLocaleSwitcherNavbarItem';

export default {
  ...ComponentTypes,
  'custom-mobileLocaleSwitcher': MobileLocaleSwitcherNavbarItem,
};
