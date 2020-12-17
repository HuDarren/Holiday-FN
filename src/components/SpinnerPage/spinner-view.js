import React from 'react';
import { Link } from 'react-router-dom';

function SpinnerView(props) {
  //   const [state, setstate] = React.useState({
  //     name: '',
  //     matchId: '',
  //   });

  let matchName = '';
  let selectedId = 0;

  function match() {
    if (props.match && props.userId) {
      let userId = props.userId;
      let matchId = props.match[userId];
      let group = props.group.GroupFollow;

      for (let i = 0; i < group.length; i++) {
        if (group[i].id === matchId) {
          matchName = group[i].name;
          selectedId = group[i].id;
        }
      }
    }
  }

  match();

  //   React.useEffect(() => {
  //     match();
  //     setstate({
  //       name: matchName,
  //       matchId: id,
  //     });
  //   }, [props.state]);
  //   console.log(state);

  return (
    <div>
      {props.match ? (
        <div>
          {/* <button onClick={match}>Pair</button>
          <div>Your Match</div> */}
          <div className="friendviewb-container1">
            <div className="friendviewb-container2">
              <button className="friendviewb-button1">
                <Link
                  className="friendviewb-link"
                  to={`/wishListView/${Number(selectedId)}`}
                >
                  <div className="friendviewb-content">{matchName[0]}</div>
                </Link>
              </button>
            </div>
            <div className="friendviewb-container3">
              <button className="friendviewb-button2">
                <Link
                  className="friendviewb-link"
                  to={`/wishListView/${Number(selectedId)}`}
                >
                  <div className="friendviewb-content2">{matchName}</div>
                </Link>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>Check Back Soon</div>
      )}
    </div>
  );
}

export default SpinnerView;
