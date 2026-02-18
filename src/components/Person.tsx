

import type { PersonType } from './PersonTypes';

const Person = ({ name }: PersonType) => {
  return (
    <div>
        {name.firstName} {name.lastName}
    </div>
  )
}

export default Person