import { mount } from '@vue/test-utils'
import Todo from '@/views/Todo'

describe('Testing Todo.vue', () => {
  it('should not show form by default', () => {
    // when
    const wrapper = mount(Todo)

    // then
    expect(wrapper.find('#offcanvasRight').classes()).not.toContain('show')
  })
})
