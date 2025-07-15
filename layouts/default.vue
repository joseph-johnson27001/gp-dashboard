<template>
  <div class="layout collapsed">
    <aside class="sidebar">
      <img src="/dashboard-logo.png" alt="Dashboard Logo" class="logo" />
      <nav>
        <ul>
          <li>
            <NuxtLink
              to="/"
              class="nav-link"
              exact-active-class="active"
              title="Dashboard"
            >
              <i class="fa-solid fa-house" title="Dashboard"></i>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/appointments"
              class="nav-link"
              exact-active-class="active"
              title="Appointments"
            >
              <i class="fa-solid fa-calendar-check" title="Appointments"></i>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/medications"
              class="nav-link"
              exact-active-class="active"
              title="Medications"
            >
              <i class="fa-solid fa-pills" title="Medications"></i>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/lab-results"
              class="nav-link"
              exact-active-class="active"
              title="Lab Results"
            >
              <i class="fa-solid fa-vial" title="Lab Results"></i>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/patient-info"
              class="nav-link"
              exact-active-class="active"
              title="Patient Info"
            >
              <i class="fa-solid fa-user" title="Patient Info"></i>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </aside>

    <main class="main-content">
      <slot />
    </main>
  </div>
</template>

<style scoped>
/* Layout container */
.layout {
  display: flex;
  min-height: 100vh;
}

/* Sidebar */
.sidebar {
  background: #2d3748;
  color: white;
  padding: 1rem 0;
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Logo */
.logo {
  width: 36px;
  height: 36px;
  margin-bottom: 1rem;
  object-fit: contain;
}

/* Sidebar navigation */
.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
}

/* Nav links */
.nav-link {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  padding: 1rem 0;
  border-radius: 4px;
  transition: background 0.2s;
  width: 48px;
  margin-bottom: 5px;
}

.nav-link:hover,
.nav-link.active {
  background: #4a5568;
}

/* Icon style */
.nav-link i {
  font-size: 18px;
}

/* Main content */
.main-content {
  flex: 1;
  padding: 2rem;
  background: #f7fafc;
  overflow-x: auto;
}
</style>
