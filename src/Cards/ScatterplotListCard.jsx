const ScatterplotListCard = ({ data, index }) => {
  return (
    <tbody>
      <tr>
        <td className="border border-gray-300">{index}</td>
        <td className="border border-gray-300">{data.sp_name}</td>
        <td className="border border-gray-300">{data.team}</td>
        <td className="border border-gray-300">{`(${data.awx}, ${data.twx})`}</td>
        <td className="border border-gray-300">{data.cy_p}</td>
      </tr>
    </tbody>
  );
};

export default ScatterplotListCard;
