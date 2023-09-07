import { Container, Logo } from "@/components";

const Nav = () => {
  return (
    <main className="fixed w-full z-10 bg-[#F3F8FF] shadow-sm">
      <div className="py-4">
        <Container>
          <div>
            <Logo />
          </div>
        </Container>
      </div>
    </main>
  );
};

export default Nav;
