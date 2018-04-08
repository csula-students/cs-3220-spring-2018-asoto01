package edu.csula.storage.servlet;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Optional;

import javax.servlet.ServletContext;

import edu.csula.models.Event;
import edu.csula.storage.EventsDAO;

import org.junit.*;

import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

public class EventsDAOImplTest {
	private ServletContext context;
	private EventsDAO dao;

	@Before
	public void setup() {
		context = mock(ServletContext.class);
		dao = new EventsDAOImpl(context);
	}

	@Test
	public void getAll() throws Exception {
		// set up initial mock state
		Collection<Event> mockEvents = new ArrayList<>();
		mockEvents.add(new Event(1, "name", "desc", 10));
		when(context.getAttribute(EventsDAOImpl.CONTEXT_NAME)).thenReturn(mockEvents);

		// actual method execution
		Collection<Event> actualEvents = dao.getAll();

		// assert and verify
		verify(context).getAttribute(EventsDAOImpl.CONTEXT_NAME);
		assertEquals(actualEvents.size(), 1);
	}

	@Test
	public void getAllWhenNull() throws Exception {
		when(context.getAttribute(EventsDAOImpl.CONTEXT_NAME)).thenReturn(null);
		// actual method execution
		Collection<Event> actualEvents = dao.getAll();

		// should return an empty list
		assertEquals(actualEvents.size(), 0);
	}

	@Test
	public void getById() throws Exception {
		// set up initial mock state
		Collection<Event> mockEvents = new ArrayList<>();
		mockEvents.add(new Event(1, "name", "desc", 10));
		when(context.getAttribute(EventsDAOImpl.CONTEXT_NAME)).thenReturn(mockEvents);

		// actual method execution
		Optional<Event> actualEvent = dao.getById(1);

		// assert and verify
		verify(context).getAttribute(EventsDAOImpl.CONTEXT_NAME);
		assertTrue(actualEvent.isPresent());
		assertEquals(actualEvent.get(), new Event(1, "name", "desc", 10));
	}

	@Test
	public void set() throws Exception {
		// set up initial mock state
		Collection<Event> mockEvents = new ArrayList<>();
		mockEvents.add(new Event(1, "name", "desc", 10));
		when(context.getAttribute(EventsDAOImpl.CONTEXT_NAME)).thenReturn(mockEvents);

		// actual method execution
		dao.set(1, new Event(1, "new name", "description", 20));
		Optional<Event> actualEvent = dao.getById(1);

		// assert and verify
		verify(context).getAttribute(EventsDAOImpl.CONTEXT_NAME);
		assertTrue(actualEvent.isPresent());
		assertEquals(actualEvent.get(), new Event(1, "new name", "description", 20));
	}

	@Test
	public void add() throws Exception {
		// set up
		when(context.getAttribute(EventsDAOImpl.CONTEXT_NAME)).thenReturn(null);
		Collection<Event> expected = new ArrayList<>();
		expected.add(new Event(1, "new event", "description", 10));
		// actual execution
		dao.add(new Event(1, "new event", "description", 10));
		// verify
		assertEquals(dao.getAll(), expected);
	}
}
