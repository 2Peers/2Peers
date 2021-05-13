import React, { useState } from 'react';

export default function MakeClass() {
  const [code, setCode] = useState('');

  return (
    <div className="form-container">
      <form>
        <label htmlFor="code">
          Code
          <input name="code" value={code} onChange={({ target }) => setCode(target.value)} />
        </label>
        <input type="submit" readOnly value="submit" />
      </form>
    </div>
  );
}
