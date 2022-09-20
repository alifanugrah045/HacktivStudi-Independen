import { useParams } from "react-router-dom";
const MembersDetailPage = () => {
  const params = useParams();
  return (
    <div>
      <h1>Member Detail Page</h1>
      <p>This is detail page of {params?.memberName} </p>
    </div>
  );
};

export default MembersDetailPage;
