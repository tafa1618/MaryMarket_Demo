const Topbar = () => {
  return (
    <div class='topbar'>
      <div class='container'>
        <div class='row'>
          <div class='col-lg-5 col-md-12 col-12'>
            {/* Top Left -*/}
            <div class='top-left'>
              <ul class='list-main'>
                <li>
                  <i class='ti-headphone-alt'></i> +221704519370
                </li>
                <li>
                  <i class='ti-email'></i> support@marrymarket.com
                </li>
              </ul>
            </div>
            {/*/ End Top Left -*/}
          </div>
          <div class='col-lg-7 col-md-12 col-12'>
            {/* Top Right -*/}
            <div class='right-content'>
              <ul class='list-main'>
                <li>
                  <i class='ti-user'></i> <a href='#'>Mon compte</a>
                </li>
                <li>
                  <i class='ti-power-off'></i>
                  <a href='login.html#'>Se connecter</a>
                </li>
              </ul>
            </div>
            {/* End Top Right -*/}
          </div>
        </div>
      </div>
    </div>
  );
};
ReactDOM.render(<Topbar />, document.querySelector('#topbar'));
