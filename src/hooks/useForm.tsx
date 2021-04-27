// React
import { useState } from 'react';

const useForm = <T extends Object>(form: T) => {
  const [state, setForm] = useState(form);

  const onChange = (value: string, field: keyof T) => {
    setForm({
      ...state,
      [field]: value,
    });
  };

  return { ...state, state, onChange };
};

export default useForm;
