const targetRadio = (
  e1: React.RefObject<HTMLInputElement>,
  e2: React.RefObject<HTMLInputElement>
) => {
  const e1Check = e1.current?.checked;
  const e2Check = e2.current?.checked;

  if (!e1Check && !e2Check) return '';

  if (e1Check && !e2Check) {
    return e1.current?.value;
  } else if (!e1Check && e2Check) {
    return e2.current?.value;
  }

  return '';
};

export { targetRadio };
