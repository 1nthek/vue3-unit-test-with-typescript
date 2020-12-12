import AppHeader from '@/components/Header/AppHeader.vue';
import { shallowMount } from '@vue/test-utils';

describe('AppHeader.vue', () => {
  test('If user is not logged in, do not show logout button', () => {
    const wrapper = shallowMount(AppHeader);
    expect(wrapper.find('button').isVisible()).toBe(false);
  });
  test('If user is logged in, show logout button', async () => {
    const wrapper = shallowMount(AppHeader);
    wrapper.setData({ loggedIn: true });
    await wrapper.vm.$nextTick();
    expect(wrapper.find('button').isVisible()).toBe(true);
  });
});
