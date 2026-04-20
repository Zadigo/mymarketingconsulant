export type AccordionItem = {
  title: string
  content: string | string[]
}

const items: AccordionItem[] = [
  {
    title: 'Je passe trop de temps sur des tâches qui ne créent pas de valeur',
    content: 'Quand les processus ne sont pas structurés, une grande partie du temps est absorbée par des tâches répétitives, manuelles ou mal organisées. Résultat : moins de temps pour réfléchir, décider et faire avancer le business. Mon rôle est d’identifier ce qui peut être automatisé intelligemment, sans complexifier inutilement, afin de libérer du temps sur ce qui a réellement un impact.'
  },
  {
    title: 'Je passe trop de temps sur des tâches qui ne créent pas de valeur',
    content: 'Quand les processus ne sont pas structurés, une grande partie du temps est absorbée par des tâches répétitives, manuelles ou mal organisées. Résultat : moins de temps pour réfléchir, décider et faire avancer le business. Mon rôle est d’identifier ce qui peut être automatisé intelligemment, sans complexifier inutilement, afin de libérer du temps sur ce qui a réellement un impact.'
  },
  {
    title: 'Je passe trop de temps sur des tâches qui ne créent pas de valeur',
    content: 'Quand les processus ne sont pas structurés, une grande partie du temps est absorbée par des tâches répétitives, manuelles ou mal organisées. Résultat : moins de temps pour réfléchir, décider et faire avancer le business. Mon rôle est d’identifier ce qui peut être automatisé intelligemment, sans complexifier inutilement, afin de libérer du temps sur ce qui a réellement un impact.'
  },
  {
    title: 'Je passe trop de temps sur des tâches qui ne créent pas de valeur',
    content: 'Quand les processus ne sont pas structurés, une grande partie du temps est absorbée par des tâches répétitives, manuelles ou mal organisées. Résultat : moins de temps pour réfléchir, décider et faire avancer le business. Mon rôle est d’identifier ce qui peut être automatisé intelligemment, sans complexifier inutilement, afin de libérer du temps sur ce qui a réellement un impact.'
  },
  {
    title: 'Je passe trop de temps sur des tâches qui ne créent pas de valeur',
    content: 'Quand les processus ne sont pas structurés, une grande partie du temps est absorbée par des tâches répétitives, manuelles ou mal organisées. Résultat : moins de temps pour réfléchir, décider et faire avancer le business. Mon rôle est d’identifier ce qui peut être automatisé intelligemment, sans complexifier inutilement, afin de libérer du temps sur ce qui a réellement un impact.'
  },
  {
    title: 'Je passe trop de temps sur des tâches qui ne créent pas de valeur',
    content: 'Quand les processus ne sont pas structurés, une grande partie du temps est absorbée par des tâches répétitives, manuelles ou mal organisées. Résultat : moins de temps pour réfléchir, décider et faire avancer le business. Mon rôle est d’identifier ce qui peut être automatisé intelligemment, sans complexifier inutilement, afin de libérer du temps sur ce qui a réellement un impact.'
  },
  {
    title: 'Je passe trop de temps sur des tâches qui ne créent pas de valeur',
    content: 'Quand les processus ne sont pas structurés, une grande partie du temps est absorbée par des tâches répétitives, manuelles ou mal organisées. Résultat : moins de temps pour réfléchir, décider et faire avancer le business. Mon rôle est d’identifier ce qui peut être automatisé intelligemment, sans complexifier inutilement, afin de libérer du temps sur ce qui a réellement un impact.'
  },
  {
    title: 'Je passe trop de temps sur des tâches qui ne créent pas de valeur',
    content: 'Quand les processus ne sont pas structurés, une grande partie du temps est absorbée par des tâches répétitives, manuelles ou mal organisées. Résultat : moins de temps pour réfléchir, décider et faire avancer le business. Mon rôle est d’identifier ce qui peut être automatisé intelligemment, sans complexifier inutilement, afin de libérer du temps sur ce qui a réellement un impact.'
  },
  {
    title: 'Je passe trop de temps sur des tâches qui ne créent pas de valeur',
    content: 'Quand les processus ne sont pas structurés, une grande partie du temps est absorbée par des tâches répétitives, manuelles ou mal organisées. Résultat : moins de temps pour réfléchir, décider et faire avancer le business. Mon rôle est d’identifier ce qui peut être automatisé intelligemment, sans complexifier inutilement, afin de libérer du temps sur ce qui a réellement un impact.'
  }
]

const [useAccordionComposable, _useAccordionComposableStore] = createInjectionState(() => {
  const selected = ref<number>()

  function select(index: number) {
    selected.value = index === selected.value ? undefined : index
  }

  function _isSelected(index: number) {
    return selected.value === index
  }

  const isSelected = reactify(_isSelected)

  return {
    items,
    selected,
    select,
    isSelected
  }
})

export { useAccordionComposable }

export function useAccordionComposableStore() {
  const store = _useAccordionComposableStore()
  if (!store) {
    throw new Error('useAccordionComposableStore must be used after useAccordionComposable')
  }
  return store
}
