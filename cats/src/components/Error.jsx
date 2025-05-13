function Error({ err }) {
  return (
    <section className="display-error">
      <h1>{err.response.status}</h1>
      <h2>{err.msg}</h2>
    </section>
  );
}

export default Error;
