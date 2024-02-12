import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Request({ req, requestHash }) {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (requestHash === req.request_hash) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [req, requestHash]);

  const handleRequestClick = async (req) => {
    navigate(`/${req.endpoint_hash}/${req.request_hash}`);
  };

  const formatDate = (date) => {
    return new Date(date).toISOString().replace("T", " | ").slice(0, -5);
  };

  return (
    <li
      onClick={() => handleRequestClick(req)}
      key={req.request_id}
      className={`${selected ? "bg-gray-900" : "bg-gray-700"} hover:bg-gray-900 cursor-pointer p-2 my-2 rounded transition ease-out delay-50`}
    >
      <div className="flex flex-1 justify-between">
        <p>
          <span className="text-purple-400 font-bold">{req.http_method}</span>{" "}
          {req.http_path}
        </p>
        <p>{formatDate(req.received_at)}</p>
      </div>
    </li>
  );
}
