const Footer = () => {
  return (
    <footer className="relative bottom-0 text-[.875rem] md:text-[1rem] lg:text-[1.125rem] my-[1.5rem] px-6 text-center text-primary-blue-700 font-medium lg:col-span-full lg:px-0 block">
      Challenge by{' '}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        className="font-bold hover:text-primary-blue-900"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a
        href="https://www.frontendmentor.io/profile/nicodes-dev"
        className="font-bold hover:text-primary-blue-900"
      >
        nicodes-dev
      </a>
      .
    </footer>
  )
}
export default Footer
