import { fireEvent, render, screen, within } from "@testing-library/react";
import { api, DataProvider } from "../../contexts/DataContext";
import Home from "./index";

// Mock event data for the Home page integration tests
const data = {
  events: [
    {
      id: 1,
      type: "conférence",
      date: "2022-04-29T20:28:45.744Z",
      title: "Conférence #productCON",
      cover: "/images/conference.png",
    },
    {
      id: 2,
      type: "forum",
      date: "2022-08-29T20:28:45.744Z",
      title: "Forum #productCON",
      cover: "/images/forum.png",
    },
  ],
  focus: [],
};


describe("When Form is created", () => {
  it("a list of events is displayed", async () => {
    // Simulate the API response
    api.loadData = jest.fn().mockResolvedValue(data);

    // Render the Home page with its data provider
    render(
        <DataProvider>
            <Home />
        </DataProvider>
    );

    // Locate the events section
    const eventsSection = screen
        .getByRole("heading", { name: "Nos réalisations" })
        .closest("section");

    // Verify that both event cards are displayed
    expect(
        await within(eventsSection).findByText("Conférence #productCON")
    ).toBeInTheDocument();

    expect(
        await within(eventsSection).findByText("Forum #productCON")
    ).toBeInTheDocument();
});
  

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });

});


describe("When a page is created", () => {
  it("a list of events is displayed", async () => {
    // Simulate the API response
    api.loadData = jest.fn().mockResolvedValue(data);

    // Render the Home page with its data provider
    render(
      <DataProvider>
        <Home />
      </DataProvider>
    );

    // Locate the events section
    const eventsSection = screen
      .getByRole("heading", { name: "Nos réalisations" })
      .closest("section");

    // Verify that both event cards are displayed
    expect(
      await within(eventsSection).findByText("Conférence #productCON")
    ).toBeInTheDocument();

    expect(
      await within(eventsSection).findByText("Forum #productCON")
    ).toBeInTheDocument();
  });

  it("a list of people is displayed", () => {
    // Render the Home page
    render(<Home />);

    // Locate the team section
    const teamSection = screen
      .getByRole("heading", { name: "Notre équipe" })
      .closest("section");

    // Verify that all six team members are displayed
    expect(within(teamSection).getByText("Samira")).toBeInTheDocument();
    expect(within(teamSection).getByText("Jean-baptiste")).toBeInTheDocument();
    expect(within(teamSection).getByText("Alice")).toBeInTheDocument();
    expect(within(teamSection).getByText("Luís")).toBeInTheDocument();
    expect(within(teamSection).getByText("Christine")).toBeInTheDocument();
    expect(within(teamSection).getByText("Isabelle")).toBeInTheDocument();
  });

  it("a footer is displayed", () => {
    // Render the Home page
    render(<Home />);

    // Locate the footer
    const footer = screen.getByRole("contentinfo");

    // Verify that the footer is displayed
    expect(footer).toBeInTheDocument();

    // Verify that the contact information is displayed
    expect(within(footer).getByText("Contactez-nous")).toBeInTheDocument();
    expect(within(footer).getByText("45 avenue de la République, 75000 Paris")).toBeInTheDocument();
    expect(within(footer).getByText("01 23 45 67 89")).toBeInTheDocument();
    expect(within(footer).getByText("contact@724events.com")).toBeInTheDocument();
  });

 
  it("an event card, with the last event, is displayed", async () => {
  // Simulate the API response
  api.loadData = jest.fn().mockResolvedValue(data);

  // Render the Home page with its data provider
  render(
    <DataProvider>
      <Home />
    </DataProvider>
  );

  // Locate the footer
  const footer = screen.getByRole("contentinfo");

  // Verify that the latest event is displayed
  expect(
    await within(footer).findByText("Forum #productCON")
  ).toBeInTheDocument();

  // Verify that the correct month is displayed
  expect(within(footer).getByText("août")).toBeInTheDocument();

  // Verify that the older event is not displayed in the footer
  expect(
    within(footer).queryByText("Conférence #productCON")
  ).not.toBeInTheDocument();
});
});
