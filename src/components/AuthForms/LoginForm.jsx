export default function LoginForm(email, password, setEmail, setPassword) {
  return (
    <form >
      <input 
        type="email" 
        placeholder='email' 
        value={email} 
        onChange={e => setEmail(e.target.value)}
      />
      <input 
        type="password" 
        placeholder='senha' 
        value={password} 
        onChange={e=>setPassword(e.target.value)}
      />
    </form>
  );
}