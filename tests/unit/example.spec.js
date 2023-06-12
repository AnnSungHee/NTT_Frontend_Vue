import { shallowMount } from '@vue/test-utils';
import TestExampleForm from '@/components/TestExampleForm.vue';

describe('TestExampleForm', () => {
  it('renders a "Hi" message', () => {
    const wrapper = shallowMount(TestExampleForm);
    expect(wrapper.text()).toContain('Hi');
  });
});