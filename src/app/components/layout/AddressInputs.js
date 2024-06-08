export default function AddressInputs({addressProps,setAddressProp,disabled=false}) {
    const {phone, streetAddress, city} = addressProps;
    return (
      <>
        <label>Phone</label>
        <input
          disabled={disabled}
          type="text" placeholder="Phone number"
          value={phone || ''} onChange={ev => setAddressProp('phone', ev.target.value)} />
        <label>City</label>
            <input
              disabled={disabled}
              type="text" placeholder="City"
              value={city || ''} onChange={ev => setAddressProp('city', ev.target.value)}
        />
        <label>Street address</label>
             <input
          disabled={disabled}
          type="text" placeholder="Street address"
          value={streetAddress || ''} onChange={ev => setAddressProp('streetAddress', ev.target.value)}
        />
      </>
    );
  }