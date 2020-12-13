import MessageDisplay from './MessageDisplay';
import { shallowMount } from '@vue/test-utils';
import { getMessage } from '@/services/axios.js';
import flushPromises from 'flush-promises';

jest.mock('@/services/axios');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('MessageDisplay.vue', () => {
  test('Calls getMessage and displays message', async () => {
    const mockMessage = 'Hello from the db!';
    getMessage.mockResolvedValueOnce({ text: mockMessage });
    const wrapper = shallowMount(MessageDisplay);
    await flushPromises();

    expect(getMessage).toHaveBeenCalledTimes(1);
    const message = wrapper.find('[data-testid="message"]').element.textContent;
    expect(message).toEqual(mockMessage);
  });

  test('Displays an error when getMessage call fails', async () => {
    const mockError = 'Oops! Something went wrong.';
    getMessage.mockRejectedValueOnce(mockError);
    const wrapper = shallowMount(MessageDisplay);
    await flushPromises();

    expect(getMessage).toHaveBeenCalledTimes(1);
    const error = wrapper.find('[data-testid="message-error"]').element.textContent;
    expect(error).toEqual(mockError);
  });
});
