export * from "./Select";
export * from "./select.types";

// <Select>          <-- componente pai (wrapper/fachada)
//   <SelectProvider multiple filterable renderChips>
//     <SelectInput />   <-- usa seu Input do DS
//     {renderChips && <Chip />} <-- opcional, usa Chip do DS
//     <Popover>
//       <DropdownContent>
//         <Item />      <-- map sobre options
//       </DropdownContent>
//     </Popover>
//   </SelectProvider>
// </Select>
// Select (pai):

// Recebe props do usuário (value, onSelectChange, multiple, filterable, renderChips)

// Só monta o Provider e renderiza os filhos

// SelectProvider (Context):

// Mantém estado interno (selectedValues, inputValue, isOpen)

// Expõe funções: handleSelect, handleRemove, handleInputChange, handleToggle

// Todos os subcomponentes usam o Context → sem prop drilling

// SelectInput:

// Usa seu Input do DS

// Consome Context para: inputValue, handleInputChange, handleToggle

// Mostra placeholder ou valor selecionado (single select)

// Chips (opcional):

// Se renderChips=true, mapeia selectedValues

// Usa seu Chip do DS

// Remove via handleRemove

// Dropdown / Item:

// Aqui entra seu Popover

// Trigger é o Input (ou botão toggle)

// Content → container da lista de opções

// Item → cada opção, com onClick chamando handleSelect


//  dropdown abaixo \/
// <Popover isOpen={isOpen} onClose={() => setIsOpen(false)}>
//   <PopoverTrigger>
//     <SelectInput />  {/* Input do DS */}
//   </PopoverTrigger>

//   <PopoverContent>
//     {filteredOptions.map((option) => (
//       <div key={option.key} onClick={() => handleSelect(option.value)}>
//         {option.label ?? option.value}
//       </div>
//     ))}
//   </PopoverContent>
// </Popover>


// SelectDropdown (Popover)
//  ├─ PopoverTrigger → SelectInput (o input do DS)
//  └─ PopoverContent → lista de SelectItem(s)
// Trigger → onde o usuário clica/foca para abrir o dropdown

// No seu caso, é o SelectInput

// Pode ser só o input ou input + toggle button (caret)

// Content → o container que vai aparecer

// Aqui você mapeia suas opções (options)

// Cada item pode ser chamado de SelectItem (ou apenas um div, se não quiser criar component separado)

// Item → representa cada opção

