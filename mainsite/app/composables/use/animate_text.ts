import { TransitionPresets } from '@vueuse/core'

/**
 * Animate a number from an initial value to a target value when the element becomes visible.
 * @param initialValue - The initial value of the number to animate.
 * @param targetValue - The target value to animate to.
 * @param isVisible - A ref that indicates whether the element is visible or not.
 */
export function useAnimateText(initialValue: Ref<number>, targetValue: number, isVisible: Ref<boolean>) {
  // const experienceValue = shallowRef(0)
  const animatedValue = ref(0)

  onMounted(() => {
    const _animatedExperience = useTransition(initialValue, {
      duration: 700,
      easing: TransitionPresets.easeInCubic
    })

    syncRef(animatedValue, _animatedExperience, { direction: 'rtl' })

    whenever(isVisible, () => {
      initialValue.value = targetValue
    })
  })

  return animatedValue
}

/**
 * Returns a random integer between the specified minimum and maximum values, inclusive.
 * @param min - The minimum value of the random number.
 * @param max - The maximum value of the random number.
 */
export function defineRandomAnimatedValue(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
