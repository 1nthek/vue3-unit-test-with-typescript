import LoginForm from './LoginForm';
import { shallowMount } from '@vue/test-utils';

describe('LoginForm.vue', () => {
  test('emits an event with a user data payload', () => {
    const wrapper = shallowMount(LoginForm);
    // const input = wrapper.find('input[type');
    const input = wrapper.find('[data-testid="name-input"]');
    input.setValue('IN DUCK KANG');
    wrapper.trigger('submit');

    const formSubmittedCalls = wrapper.emitted('formSubmitted');
    expect(formSubmittedCalls).toHaveLength(1);

    const expectedPayload = { name: 'IN DUCK KANG' };
    expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(expectedPayload);
  });
});
