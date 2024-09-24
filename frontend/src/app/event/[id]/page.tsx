const UserPage = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <div>My Post: {params.id}</div>
    </div>
  );
};

export default UserPage;
