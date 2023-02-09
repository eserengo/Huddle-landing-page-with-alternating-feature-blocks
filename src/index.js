(function () {
  document.querySelector('body').insertAdjacentHTML('afterbegin', `<div id='App'></div>`);
  
  const DisplayOnResize = () => {
    if (window.matchMedia("(width<=375px)").matches) {
      // RULES
      document.querySelectorAll('.desktop').forEach(item => {
        item.classList.add('hidden');
      })
      document.querySelectorAll('.mobile').forEach(item => {
        item.classList.remove('hidden');
      })
      document.querySelectorAll('.flex').forEach(item => {
        item.classList.remove('flex-row');
        item.classList.add('flex-col');
      })
    }
    if (window.matchMedia("(width>375px)").matches) {
      // RULES
      document.querySelectorAll('.mobile').forEach(item => {
        item.classList.add('hidden');
      })
      document.querySelectorAll('.desktop').forEach(item => {
        item.classList.remove('hidden');
      })
      document.querySelectorAll('.flex').forEach(item => {
        item.classList.remove('flex-col');
        item.classList.add('flex-row');
      })
    }
  }

  window.addEventListener('resize', () => {
    let timer;
    window.clearTimeout(timer);
    timer = window.setTimeout(DisplayOnResize(), 500);
  });

  class Heading extends React.Component {
    constructor(props) {
      super();
    }
    render() {
      if (this.props.query == 'h1') return <h1 className={this.props.class}>{this.props.content}</h1>;
      else if (this.props.query == 'h2') return <h2 className={this.props.class}>{this.props.content}</h2>;
      else return <h3 className={this.props.class}>{this.props.content}</h3>
    }
  }

  class Button extends React.Component {
    constructor(props) {
      super();
    }
    render() {
      return <button className={this.props.class}>{this.props.content}</button>;
    }
  }

  class Para extends React.Component {
    constructor(props) {
      super();
    }
    render() {
      return <p className={this.props.class}>{this.props.content}</p>;
    }
  }

  class Image extends React.Component {
    constructor(props) {
      super();
    }
    render() {
      return <img className={this.props.class} src={this.props.src} alt={this.props.alt} />;
    }
  }

  const ContactNav = () => (
    <div className='grid-container'>
      <Image class='logo' src='./src/images/footer-logo.svg' alt='logo' />
      <Image class='icon' src='./src/images/icon-location.svg' alt='location icon' />
      <Para class='text' content='Mendoza, Argentina' />
      <Image class='icon' src='./src/images/icon-phone.svg' alt='phone icon' />
      <Para class='text' content='+1-543-123-4567' />
      <Image class='icon' src='./src/images/icon-email.svg' alt='email icon' />
      <Para class='text' content='example@huddle.com' />
    </div>
  )

  const LinksNav = () => {
    const data = ['About Us', 'What We Do', 'FAQ', 'Career', 'Blog', 'Contact Us'];
    const Map = ({ props }) => {
      return props.map((item) => <li key={item}>{item}</li>)
    }
    return (
      <nav className='selectable'>
        <ul className='links flex-col'>
          <Map props={data} />
        </ul>
      </nav>
    )
  }

  const SocialNav = () => {
    const data = ['fa fa-facebook-official', 'fa fa-twitter', 'fa fa-instagram'];
    const Map = ({ props }) => {
      return props.map((item) => <li key={item}><i className={item}></i></li>)
    }
    return (
      <nav className='selectable'>
        <ul className='social flex-row center'>
          <Map props={data} />
        </ul>
      </nav>
    )
  }

  const Header = () => (
    <header className='header'>
      <Image class='logo left' src='./src/images/logo.svg' alt='logo' />
      <Button class='secondary button selectable right' content='Try It Free' />
      <div className='flex center'>
        <div className='flex-col'>
          <Heading query='h1' class='primary title' content='Build The Community Your Fans Will Love' />
          <Para class='strong' content='Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.' />
          <Button class='primary button selectable' content='Get Started For Free' />
        </div>
        <Image class='image' src='./src/images/illustration-mockups.svg' alt='mockups' /> 
      </div>
    </header>
  )

  const Main = () => (
    <main className='main flex-col'>
      <section className='section one flex center'>
        <Image class='image' src='./src/images/illustration-grow-together.svg' alt='grow together' />
        <div className='flex-col'>
          <Heading class='sub title' content='Grow Together' />
          <Para class='para' content='Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.' />
        </div>
      </section>
      <section className='section two flex center'>
        <Image class='image' src='./src/images/illustration-flowing-conversation.svg' alt='flowing conversation' />
        <div className='flex-col'>
          <Heading class='sub title' content='Flowing Conversations' />
          <Para class='para' content='You wouldn’t paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.' />
        </div>
      </section>
      <section className='section three flex center'>
        <Image class='image' src='./src/images/illustration-your-users.svg' alt='your users' />
        <div className='flex-col'>
          <Heading class='sub title' content='Your Users' />
          <Para class='para' content='It takes no time at all to integrate Huddle with your app’s authentication solution. This means, once signed in to your app, your users can start chatting immediately.' />
        </div>
      </section>
      <section className='section four flex-col center'>
        <Heading query='h2' class='secondary title' content='Ready To Build Your Community?' />
        <Button class='primary button selectable' content='Get Started For Free' />
      </section>
    </main>
  )

  const Footer = () => (
    <footer className='footer flex rel'>
      <ContactNav />
      <LinksNav />
      <SocialNav />
      <Para class='copy abs' content='&copy; Copyright 2018 Huddle. All rights reserved.' />
    </footer>
  )
  
  const Attribution = () => (
    <p className='attribution'>Challenge by <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>Frontend Mentor</a>. Coded by <a href='https://github.com/eserengo/' target='_blank'>Federico Borzani</a>.</p>
  )

  const App = () => {
    React.useEffect(() => {
      DisplayOnResize()
    }, []);
    return (
      <div>
        <Header />
        <Main />
        <Footer />
        <Attribution />
      </div>
    )
  }

  const root = ReactDOM.createRoot(document.getElementById('App'));
  root.render(<App tab='home' />);
})();